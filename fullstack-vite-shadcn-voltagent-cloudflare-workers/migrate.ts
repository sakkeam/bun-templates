import concurrently from "concurrently";

const { result } = concurrently([
	{
		command: "echo migrating...",
		name: "migrate",
	},
]);

result.then(
	() => {},
	() => {},
);
