import { openai } from "@ai-sdk/openai";
import VoltAgent, {
	Agent,
	InMemoryStorageAdapter,
	Memory,
	VoltOpsClient,
} from "@voltagent/core";
import { createPinoLogger } from "@voltagent/logger";
import serverlessHono from "@voltagent/serverless-hono";

type Env = {
	OPENAI_API_KEY: string;
	VOLTAGENT_PUBLIC_KEY?: string;
	VOLTAGENT_SECRET_KEY?: string;
};

const getEnv = (key: keyof Env): string => process.env[key] ?? "";

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
		storage: new InMemoryStorageAdapter({
			storageLimit: 50,
		}),
	}),
});

const voltAgent = new VoltAgent({
	agents: { agent },
	serverless: serverlessHono(),
	logger,
	voltOpsClient: new VoltOpsClient({
		publicKey: getEnv("VOLTAGENT_PUBLIC_KEY"),
		secretKey: getEnv("VOLTAGENT_SECRET_KEY"),
	}),
});

export default voltAgent.serverless().toCloudflareWorker();
