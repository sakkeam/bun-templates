package main

import (
	"context"
	"dagger/unique-name/internal/dagger"
)

type UniqueName struct{}

// Build and deploy
func (m *UniqueName) BuildAndDeploy(
	ctx context.Context,
	// +ignore=["**/node_modules"]
	// +defaultPath="."
	source *dagger.Directory,
	cloudflareAPIToken *dagger.Secret,
	cloudflareAccountID *dagger.Secret,
) (string, error) {
	return dag.Container().
		From("node:22").
		WithSecretVariable("CLOUDFLARE_API_TOKEN", cloudflareAPIToken).
		WithSecretVariable("CLOUDFLARE_ACCOUNT_ID", cloudflareAccountID).
		WithMountedDirectory("/mnt", source).
		WithWorkdir("/mnt").
		WithExec([]string{"npm", "install", "--global", "bun"}).
		WithExec([]string{"bun", "install"}).
		WithExec([]string{"bun", "run", "build"}).
		WithExec([]string{"bun", "run", "deploy"}).
		Stdout(ctx)
}
