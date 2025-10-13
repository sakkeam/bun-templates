import concurrently from "concurrently";

const { result } = concurrently([
	{
		command: "bun run --cwd=packages/frontend dev",
		name: "frontend",
	},
	{
		command: "bun run --cwd=packages/backend dev",
		name: "backend",
	},
]);

result.then(
	() => {},
	() => {},
);
