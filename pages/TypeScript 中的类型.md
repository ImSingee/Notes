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
		- `object` 代表所有非原始类型，即与 JS 中的语义相同
		- `Object` 几乎相当于 unknown（但可以调用所有公共方法），其实际上的定义为
			- ```ts
			  interface Object {
			    constructor: Function;
			    toString(): string;
			    toLocaleString(): string;
			    valueOf(): Object;
			    hasOwnProperty(v: PropertyKey): boolean;
			    isPrototypeOf(v: Object): boolean;
			    propertyIsEnumerable(v: PropertyKey): boolean;
			  }
			  ```
			- 其定义相当于 `object` 的公共方法
			- 但同样可以通过基本类型访问（因为自动装箱）
	- 关联阅读：[一文读懂 TS 中 Object, object, {} 类型之间的区别](http://www.semlinker.com/ts-object-type/)
- ## any 和 unknwon
	- 二者同属 TS 中的[顶级类型](https://2ality.com/2020/06/any-unknown-typescript.html)
	- any 约等于关闭类型检查（除不能赋值给 never）
	- unknown 为表示类型未知，使用前需做类型检查或类型断言
- ## 类型兼容
	- https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
- ## enum 类型
	- enum 类型只能为数字或字符串
	- 其本质相当于别名
	- 通常仅用于数字，使用字符串时不如不用 enum
- ## type 和 interface
	- 几乎一致
	- type 支持原始类型和 object，而 interface 仅用于 object
	- type 本质只是别名，而 interface 为类型声明
		- 该区分点一般意义不大
		- 但在 IDE 中提示时可以看到
			- IDE 提示时 type 会自动递归合并
			- 而 interface 会展示出引用的 interface 的名字
	- interface 可以被多重扩展（同 namespace 且同名的 interface 会被自动融合）
	- 对外 API 尽量用 interface（方便扩展）
	- 对内则尽量用 type
- ## 类型区分
	- js 方案：typeof 判断大类型
	- js 方案：instanceof 判断是否为类实例
	- js 方案：in 判断实例成员
	- TS 方案（类型收窄）：is
		- 本质上其实是 bool