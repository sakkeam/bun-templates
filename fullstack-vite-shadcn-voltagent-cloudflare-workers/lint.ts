import concurrently from "concurrently";

const toWrite = Bun.argv[2] === "write";

const { result } = concurrently([
	{
		command: `biome lint ${toWrite ? "--write" : ""}`,
		name: "biome",
	},
]);

result.then(
	() => {},
	() => {},
);
