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
			  dist
			  ```
	- ### ESLint
		- ```shell
		  npx install-peerdeps --dev eslint-config-airbnb
		  npm install -D eslint eslint-config-react-app @typescript-eslint/parser @typescript-eslint/eslint-plugin
		  ```
		- **.eslintrc**
			- ```json
			  {
			    
			  }
			  ```
		- **.eslintignore**
			- ```ignore
			  node_modules
			  dist
			  ```
	- ### Lint-Staged
		- **.lintstagedrc.js**
		- ```js
		  module.exports = {
		    "*.(js|mjs|jsx|css|json|html|d.ts|ts|tsx)": "prettier --write",
		    "*.(js|mjs|jsx|ts|tsx)": ["eslint --fix"],
		  };
		  ```
- ## 增加 Docker
	-