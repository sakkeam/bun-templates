import { watch } from "node:fs/promises";
import { $ } from "bun";
import concurrently, { type ConcurrentlyResult } from "concurrently";

const envLocalWatcher = watch(".env.local");
const envDevelopmentWatcher = watch(".env.development");

const start = (): ConcurrentlyResult => {
	const conc = concurrently([
		{
			command: "bun run --watch src/index.ts",
			name: "dev",
		},
	]);

	conc.result.then(
		() => {},
		() => {},
	);

	return conc;
};

let conc = start();

const stop = async (): Promise<void> => {
	for (const command of conc.commands) {
		command.kill();
	}
};

const watchEnvLocal = async (): Promise<void> => {
	for await (const _ of envLocalWatcher) {
		await stop();
		await $`sleep 2`;
		conc = start();
	}
};

const watchEnvDevelopment = async (): Promise<void> => {
	for await (const _ of envDevelopmentWatcher) {
		await stop();
		await $`sleep 2`;
		conc = start();
	}
};

await Promise.all([watchEnvLocal(), watchEnvDevelopment()]);
