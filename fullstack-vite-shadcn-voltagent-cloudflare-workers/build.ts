import concurrently from "concurrently";

const { result } = concurrently([
	{
		command: "bun run --cwd=packages/frontend build",
		name: "frontend",
	},
	{
		command: "bun run --cwd=packages/backend build",
		name: "backend",
	},
]);

result.then(
	() => {},
	() => {},
);
