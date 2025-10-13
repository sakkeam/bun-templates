import concurrently from "concurrently";

const env = Bun.argv[2] ?? "staging";

concurrently([
	{
		command: `bun run --cwd=packages/frontend deploy:${env}`,
		name: "frontend",
	},
	{
		command: `bun run --cwd=packages/backend deploy:${env}`,
		name: "backend",
	},
]);
