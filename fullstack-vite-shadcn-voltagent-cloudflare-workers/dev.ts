import { watch } from "node:fs/promises";
import { $ } from "bun";
import concurrently, { type ConcurrentlyResult } from "concurrently";

const start = (): ConcurrentlyResult => {
	const conc = concurrently([
		{
			command: "bun run --cwd=packages/frontend dev",
			name: "frontend",
		},
		{
			command: "bun run --cwd=packages/backend dev",
			name: "backend",
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

const operations: Promise<void>[] = [];

const handleChange = async (): Promise<void> => {
	await stop();
	await $`sleep 2`;
	conc = start();
};

const envLocalPath = ".env.local";
if (await Bun.file(envLocalPath).exists()) {
	const envLocalWatcher = watch(envLocalPath);
	const watchEnvLocal = async (): Promise<void> => {
		for await (const _ of envLocalWatcher) {
			await handleChange();
		}
	};
	operations.push(watchEnvLocal());
}

const envDevelopmentPath = ".env.development";
if (await Bun.file(envDevelopmentPath).exists()) {
	const envDevelopmentWatcher = watch(envDevelopmentPath);
	const watchEnvDevelopment = async (): Promise<void> => {
		for await (const _ of envDevelopmentWatcher) {
			await handleChange();
		}
	};
	operations.push(watchEnvDevelopment());
}

await Promise.all(operations);
