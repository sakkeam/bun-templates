import concurrently from "concurrently";

const toWatch = Bun.argv[2] === "watch";

const { result } = concurrently([
	{
		command: `bun run --cwd=packages/frontend test${toWatch ? ":watch" : ""}`,
		name: "frontend",
	},
	{
		command: `bun run --cwd=packages/backend test${toWatch ? ":watch" : ""}`,
		name: "backend",
	},
]);

result.then(
	() => {},
	() => {},
);
