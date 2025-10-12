import concurrently from "concurrently";

concurrently([
	{
		command: "bun run --cwd=packages/frontend deploy",
		name: "frontend",
	},
	{
		command: "bun run --cwd=packages/backend deploy",
		name: "backend",
	},
]);
