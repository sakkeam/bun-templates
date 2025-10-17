# unique-name

To install dependencies:

```bash
bun install
```

To install Git hooks:

```bash
bunx lefthook install
```

To generate:

```bash
bun run generate
```

To format:

```bash
bun run format
bun run format:write
```

To lint:

```bash
bun run lint
bun run lint:write
```

To format and lint:

```bash
bun run check
bun run check:write
```

To set environment variables:

```bash
dotenvx set OPENAI_API_KEY your_openai_api_key_development -f .env.development
dotenvx set VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_development -f .env.development
dotenvx set VOLTAGENT_SECRET_KEY your_voltagent_secret_key_development -f .env.development
dotenvx decrypt -f .env.development --stdout > packages/backend/.dev.vars

dotenvx set OPENAI_API_KEY your_openai_api_key_preview -f .env.preview
dotenvx set VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_preview -f .env.preview
dotenvx set VOLTAGENT_SECRET_KEY your_voltagent_secret_key_preview -f .env.preview
dotenvx set CLOUDFLARE_API_TOKEN your_cloudflare_api_token_preview -f .env.preview
dotenvx set CLOUDFLARE_ACCOUNT_ID your_cloudflare_account_id_preview -f .env.preview
npx -w packages/backend wrangler secret put --env preview OPENAI_API_KEY
npx -w packages/backend wrangler secret put --env preview VOLTAGENT_PUBLIC_KEY
npx -w packages/backend wrangler secret put --env preview VOLTAGENT_SECRET_KEY

dotenvx set OPENAI_API_KEY your_openai_api_key_staging -f .env.staging
dotenvx set VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_staging -f .env.staging
dotenvx set VOLTAGENT_SECRET_KEY your_voltagent_secret_key_staging -f .env.staging
dotenvx set CLOUDFLARE_API_TOKEN your_cloudflare_api_token_staging -f .env.staging
dotenvx set CLOUDFLARE_ACCOUNT_ID your_cloudflare_account_id_staging -f .env.staging
npx -w packages/backend wrangler secret put --env preview OPENAI_API_KEY
npx -w packages/backend wrangler secret put --env preview VOLTAGENT_PUBLIC_KEY
npx -w packages/backend wrangler secret put --env preview VOLTAGENT_SECRET_KEY

dotenvx set OPENAI_API_KEY your_openai_api_key_production -f .env.production
dotenvx set VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_production -f .env.production
dotenvx set VOLTAGENT_SECRET_KEY your_voltagent_secret_key_production -f .env.production
dotenvx set CLOUDFLARE_API_TOKEN your_cloudflare_api_token_production -f .env.production
dotenvx set CLOUDFLARE_ACCOUNT_ID your_cloudflare_account_id_production -f .env.production
npx -w packages/backend wrangler secret put --env production OPENAI_API_KEY
npx -w packages/backend wrangler secret put --env production VOLTAGENT_PUBLIC_KEY
npx -w packages/backend wrangler secret put --env production VOLTAGENT_SECRET_KEY
```

To set secrets in GitHub Actions:

```
DOTENV_PRIVATE_KEY_PREVIEW=your_dotenvx_private_key_preview
DOTENV_PRIVATE_KEY_STAGING=your_dotenvx_private_key_staging
DOTENV_PRIVATE_KEY_PRODUCTION=your_dotenvx_private_key_production
```

To develop:

```bash
bun run dev
```

To build:

```bash
bun run build
```

To provision:

```bash
bun run provision
```

To migrate:

```bash
bun run migrate
```

To deploy:

```bash
bun run deploy:preview
bun run deploy:staging
bun run deploy:production
```
