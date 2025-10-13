package main

import (
	"context"
	"dagger/unique-name/internal/dagger"
	"fmt"
	"os"
)

type UniqueName struct{}

// Build and deploy
func (m *UniqueName) BuildAndDeploy(
	ctx context.Context,
	// +ignore=["**/node_modules"]
	// +defaultPath="."
	source *dagger.Directory,
	key *dagger.Secret,
	env string,
) (string, error) {
	var keyName string
	switch env {
	case "preview":
		keyName = "DOTENV_PRIVATE_KEY_PREVIEW"
	case "production":
		keyName = "DOTENV_PRIVATE_KEY_PRODUCTION"
	case "staging":
		keyName = "DOTENV_PRIVATE_KEY_STAGING"
	default:
		fmt.Fprintf(os.Stderr, "invalid environment: %s\n", env)
		os.Exit(1)
	}

	return dag.Container().
		From("node:22").
		WithSecretVariable(keyName, key).
		WithMountedDirectory("/mnt", source).
		WithWorkdir("/mnt").
		WithExec([]string{"sh", "-c", "curl -sfS https://dotenvx.sh | sudo sh"}).
		WithExec([]string{"npm", "install", "--global", "bun"}).
		WithExec([]string{"bun", "install"}).
		WithExec([]string{"bun", "run", "format"}).
		WithExec([]string{"bun", "run", "lint"}).
		WithExec([]string{"bun", "run", "test"}).
		WithExec([]string{"bun", "run", "build"}).
		WithExec([]string{"bun", "run", "deploy:" + env}).
		Stdout(ctx)
}
