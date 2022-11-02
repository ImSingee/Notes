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
		- **package.json**
			- ```json
			  {
			    "scripts": {
			      "lint": "eslint .",
			      "lint:fix": "eslint . --fix",
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
	-