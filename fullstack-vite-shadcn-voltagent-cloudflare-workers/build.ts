import concurrently from "concurrently";

concurrently([
	{
		command: "bun run --cwd=packages/frontend build",
		name: "frontend",
	},
	{
		command: "bun run --cwd=packages/backend build",
		name: "backend",
	},
]);
