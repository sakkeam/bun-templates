import { $ } from "bun";

while (true) {
	await $`npx wrangler dev --ip 0.0.0.0`;
	await $`sleep 2`;
}
