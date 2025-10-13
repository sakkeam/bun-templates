import concurrently from "concurrently";

const toWrite = Bun.argv[2] === "write";

const { result } = concurrently([
	{
		command: `biome format ${toWrite ? "--write" : ""}`,
		name: "biome",
	},
	{
		command: `prettier ${toWrite ? "--write" : "--check"} .`,
		name: "prettier",
	},
	{
		command: `gofmt ${toWrite ? "-w" : "-l"} .`,
		name: "gofmt",
	},
]);

result.then(
	() => {},
	() => {},
);
