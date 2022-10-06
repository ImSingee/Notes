- ## 类型
	- ### JS 中的类型
		- null
		- undefined
		- number
		- bigint
		- string
		- boolean
		- symbol
		- object（包含 Array, Function, Date ...）
	- ### TS 中的类型
		- JS 中的所有类型 +
		- void
		- never
		- enum
		- unknown
		- any
		- 自定义的 type / interface / namespace
- ## 包装类型
	- JS 中存在基本类型 number string boolean
	- 也存在包装类型 Number String Boolean
	- JS 并非一切皆对象，能对基本类型调用方法仅因为进行了自动装箱，可进一步阅读[原始类型的方法](https://zh.javascript.info/primitives-methods)
	- 不推荐自行使用包装类型，因为
		- typeof 会将包装类型认为是 object
			- ```js
			  typeof 123 // number
			  typeof new Number(123) // object
			  typeof Number(123) // number
			  ```
		- `new Number(0)` 的布尔断言为 true（因为所有对象都是 true）
	- 包装类型是一次性发生的，产生的是临时对象
		- ```js
		  var s = "something"
		  s.aaa = 'x' // 定义方法
		  s.aaa // 无法访问
		  ```
- ## typeof
	- `typeof x` 与 `typeof(x)` 等价
	- `typeof` 针对 `undefined` `number` `string` `boolean` `symbol` 返回对应的类型名
	- `typeof null === 'object'`
	- `typeof` 对于函数会特殊处理，尽管函数也属于 object，但它会返回特殊的 function `typeof alert === 'function'`
	- `typeof` 对于 Array、Date 等均无特殊处理，仅会返回 object
- ## TS 中的 Object
	- 与 TS 中的其他大写类型（`Number` `String` `Boolean` `Symbol`）代表着对应的 JS 小写类型不同，TS 中的 Object 和 object 并不同
		- object 代表所有非原始类型，即与 JS 中的语义相同
		-