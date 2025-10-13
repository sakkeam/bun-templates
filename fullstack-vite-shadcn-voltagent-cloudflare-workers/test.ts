import concurrently from "concurrently";

const { result } = concurrently([
	{
		command: "bun run --cwd=packages/frontend test",
		name: "frontend",
	},
	{
		command: "bun run --cwd=packages/backend test",
		name: "backend",
	},
]);

result.then(
	() => {},
	() => {},
);
