- # Datomic & Datalog
	- 查询语法使用 [EDN](http://edn-format.org/)
		- `:` 开头关键字 Keyword `:kw` ,  `:namespaced/keyword` ,  `:foo.bar/baz`
		- 字符串 `"This is a string"`
		- 数字 `42` ,  `3.14159`
		- `[]` 包裹的 Vector 向量 `[1 2 3]`   `[:find ?foo ...]`
		- `()` 包裹的 List 列表 `(3.14 :foo [:bar :baz])` ,  `(+ 1 2 3 4)`
		- Instants `#inst "2013-02-26"`
		- 符号 `max` ,  `+` ,  `?title`
	- 查询规则
		- 是一个 Vector
		- 以 Keyword `:find` 开头
		- 后接一个或多个 pattern variable （以 `?` 开头的 Symbol）
		- 接 Keyword `:where`
		- 后接一个 Vector 代表 pattern match
	- Pattern Match 规则
		- Datomic 中一条数据的格式是固定的，由四部分组成
			- `<e-id>` Entity ID
			- `<attribute>` 属性名
			- `<value>` 属性值
			- `<tx-id>` Transaction ID
		- 同一 Entity ID 的多条数据相当于合并了属性
		- Pattern Match 时会依次进行这四个元素的匹配，并忽略最后的字段；如果想做通配可以使用符号 `_`
			- 使用 `?` 开头的符号代表绑定元素到值
			- 使用相关值代表进行相等匹配
			- 因此 Pattern Match Vector 中接收的是 1-4 个元素
				- 不允许 0 元素是因为不允许做全表扫描
				- 可以 1-3 元素是因为 `?e ?p` 等同于 `?e ?p _ _` 即会自动补充通配符
			- 示例
				- ```datalog
				  # Find the entity ids of movies made in 1987
				  [:find ?e
				   :where
				   [?e :movie/year 1987]]
				  
				  # Find the entity-id and titles of movies in the database
				  [:find ?e ?title
				   :where
				   [?e _ ?title]]
				  
				  ```