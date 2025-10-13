import concurrently from "concurrently";

const { result } = concurrently([
	{
		command: "echo generating...",
		name: "generate",
	},
]);

result.then(
	() => {},
	() => {},
);
