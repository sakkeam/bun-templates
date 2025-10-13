# unique-name

To install dependencies:

```bash
bun install
```

To install Git hooks:

```bash
bunx lefthook install
```

To set environment variables:

```bash
dotenvx set -f .env.local OPENAI_API_KEY your_openai_api_key_local
dotenvx set -f .env.local VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_local
dotenvx set -f .env.local VOLTAGENT_SECRET_KEY your_voltagent_secret_key_local

dotenvx set -f .env.preview OPENAI_API_KEY your_openai_api_key_preview
dotenvx set -f .env.preview VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_preview
dotenvx set -f .env.preview VOLTAGENT_SECRET_KEY your_voltagent_secret_key_preview
dotenvx set -f .env.preview CLOUDFLARE_API_TOKEN your_cloudflare_api_token_preview
dotenvx set -f .env.preview CLOUDFLARE_ACCOUNT_ID your_cloudflare_account_id_preview

dotenvx set -f .env.staging OPENAI_API_KEY your_openai_api_key_staging
dotenvx set -f .env.staging VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_staging
dotenvx set -f .env.staging VOLTAGENT_SECRET_KEY your_voltagent_secret_key_staging
dotenvx set -f .env.staging CLOUDFLARE_API_TOKEN your_cloudflare_api_token_staging
dotenvx set -f .env.staging CLOUDFLARE_ACCOUNT_ID your_cloudflare_account_id_staging

dotenvx set -f .env.production OPENAI_API_KEY your_openai_api_key_production
dotenvx set -f .env.production VOLTAGENT_PUBLIC_KEY your_voltagent_public_key_production
dotenvx set -f .env.production VOLTAGENT_SECRET_KEY your_voltagent_secret_key_production
dotenvx set -f .env.production CLOUDFLARE_API_TOKEN your_cloudflare_api_token_production
dotenvx set -f .env.production CLOUDFLARE_ACCOUNT_ID your_cloudflare_account_id_production
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

To deploy:

```bash
bun run deploy:frontend
bun run deploy:backend
```
