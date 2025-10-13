import concurrently from "concurrently";

const { result } = concurrently([
	{
		command: "echo provisioning...",
		name: "provision",
	},
]);

result.then(
	() => {},
	() => {},
);
