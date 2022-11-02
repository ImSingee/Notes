- https://tailwindcss.com/docs/guides/nextjs
-
- ```bash
  npx create-next-app@latest --typescript  --example with-tailwindcss my-project
  cd my-project
  ```
-
- ## 配置 Lint
	- ### Prettier
		- ```shell
		  npm install -D prettier 
		  ```
		- **package.json**
			- ```json
			  {
			    "scripts": {
			      "prettier": "prettier --list-different .",
			      "prettier:fix": "prettier --write .",
			    }
			  }
			  ```
		- **.prettierignore**
			- ```ignore
			  node_modules
			  out
			  ```
	- ### ESLint
		- ```shell
		  npx next lint --strict
		  npm install -D eslint-config-prettier
		  ```
		- **.eslintrc.json**
			- ```json
			  {
			    "extends": ["next/core-web-vitals", "prettier"]
			  }
			  ```
		- **package.json**
			- ```json
			  {
			    "scripts": {
			      "lint": "next lint .",
			      "lint:fix": "next lint . --fix",
			    }
			  }
			  ```
		- **.eslintignore**
			- ```ignore
			  node_modules
			  out
			  ```
	- ### Lint-Staged
		- ```shell
		  npm install -D lint-staged
		  ```
		- **.lintstagedrc.js**
			- ```js
			  const path = require('path')
			  
			  const buildEslintCommand = (filenames) =>
			    `next lint --fix --file ${filenames
			      .map((f) => path.relative(process.cwd(), f))
			      .join(' --file ')}`
			  
			  module.exports = {
			    "*.(js|mjs|jsx|css|json|html|d.ts|ts|tsx)": "prettier --write",
			    "*.(js|mjs|jsx|ts|tsx)": [buildEslintCommand],
			  };
			  ```
	- ### Husky
		- ```shell
		  npm install -D husky
		  npx husky install
		  npx husky add .husky/pre-commit "npx lint-staged"
		  ```
		- **package.json**
			- ```json
			  {
			    "scripts": {
			      "prepare": "husky install",
			    }
			  }
			  ```
- ## 增加 Docker
	- ### 修改为 [standalone output](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files)
		- **next.config.js** 增加
			- ```js
			  module.exports = {
			    output: 'standalone',
			  }
			  ```
	- 增加 [Dockerfile](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)
		- ```Dockerfile
		  # Install dependencies only when needed
		  FROM node:16-alpine AS deps
		  # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
		  RUN apk add --no-cache libc6-compat
		  WORKDIR /app
		  
		  # Install dependencies based on the preferred package manager
		  COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
		  RUN \
		    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
		    elif [ -f package-lock.json ]; then npm ci; \
		    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
		    else echo "Lockfile not found." && exit 1; \
		    fi
		  
		  
		  # Rebuild the source code only when needed
		  FROM node:16-alpine AS builder
		  WORKDIR /app
		  COPY --from=deps /app/node_modules ./node_modules
		  COPY . .
		  
		  # Next.js collects completely anonymous telemetry data about general usage.
		  # Learn more here: https://nextjs.org/telemetry
		  # Uncomment the following line in case you want to disable telemetry during the build.
		  # ENV NEXT_TELEMETRY_DISABLED 1
		  
		  RUN yarn build
		  
		  # If using npm comment out above and use below instead
		  # RUN npm run build
		  
		  # Production image, copy all the files and run next
		  FROM node:16-alpine AS runner
		  WORKDIR /app
		  
		  ENV NODE_ENV production
		  # Uncomment the following line in case you want to disable telemetry during runtime.
		  # ENV NEXT_TELEMETRY_DISABLED 1
		  
		  RUN addgroup --system --gid 1001 nodejs
		  RUN adduser --system --uid 1001 nextjs
		  
		  COPY --from=builder /app/public ./public
		  
		  # Automatically leverage output traces to reduce image size
		  # https://nextjs.org/docs/advanced-features/output-file-tracing
		  COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
		  COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
		  
		  USER nextjs
		  
		  EXPOSE 3000
		  
		  ENV PORT 3000
		  
		  CMD ["node", "server.js"]
		  
		  ```