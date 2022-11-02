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
		  npx install-peerdeps --dev eslint-config-airbnb
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
		- **.eslintrc**
			- ```json
			  {
			    "extends": ["airbnb", "airbnb/hooks"]
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
			  module.exports = {
			    "*.(js|mjs|jsx|css|json|html|d.ts|ts|tsx)": "prettier --write",
			    "*.(js|mjs|jsx|ts|tsx)": ["eslint --fix"],
			  };
			  ```
	- ### Husky
		-
- ## 增加 Docker
	-