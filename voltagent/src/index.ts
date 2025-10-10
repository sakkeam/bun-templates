import { openai } from "@ai-sdk/openai";
import VoltAgent, { Agent, Memory } from "@voltagent/core";
import { LibSQLMemoryAdapter } from "@voltagent/libsql";
import { createPinoLogger } from "@voltagent/logger";
import honoServer from "@voltagent/server-hono";

const logger = createPinoLogger({
	name: "my-agent",
	level: "info",
});

const agent = new Agent({
	name: "my-agent",
	instructions:
		"A helpful assistant that answers questions without using tools",
	model: openai("gpt-4o-mini"),
	memory: new Memory({
		storage: new LibSQLMemoryAdapter({
			url: "file:./.voltagent/memory.db",
		}),
	}),
});

new VoltAgent({
	agents: { agent },
	server: honoServer(),
	logger,
});
