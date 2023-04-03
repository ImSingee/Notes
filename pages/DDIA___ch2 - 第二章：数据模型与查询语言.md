alias:: DDIA/ch2

- [link](https://github.com/Vonng/ddia/blob/master/ch2.md)
-
## 关系模型与文档模型
	- SQL
		- 现在最著名的数据模型
		- 数据被组织成 **关系**（SQL 中称作 **表**），其中每个关系是 **元组**（SQL 中称作 **行**) 的无序集合
	- 多年来，在数据存储和查询方面存在着许多相互竞争的方法
		- 在 20 世纪 70 年代和 80 年代初，**网状模型（network model）**和**层次模型（hierarchical model）**曾是主要的选择
		- 但**关系模型（relational model）**随后占据了主导地位
	- ### NoSQL 的诞生
		- 现在 - 2010 年代，NoSQL 开始了最新一轮尝试，试图推翻关系模型的统治地位
		- NoSQL 被追溯性地重新解释为 **不仅是 SQL（Not Only SQL）**
		- 驱动因素
			- 需要比关系数据库更好的可伸缩性，包括非常大的数据集或非常高的写入吞吐量
			- 相比商业数据库产品，免费和开源软件更受偏爱
			- 关系模型不能很好地支持一些特殊的查询操作
			- 受挫于关系模型的限制性，渴望一种更具多动态性与表现力的数据模型
	- 在可预见的未来，关系数据库似乎可能会继续与各种非关系数据库一起使用 - 这种想法有时也被称为 **混合持久化（polyglot persistence）**
	- ### 对象关系不匹配
		- 目前大多数应用程序开发都使用面向对象的编程语言来开发
		- 对 SQL 数据模型的普遍批评
			- 如果数据存储在关系表中，那么需要一个笨拙的**转换层**，处于应用程序代码中的对象和表，行，列的数据库模型之间
			- 模型之间的不连贯有时被称为 **阻抗不匹配（impedance mismatch）**
			- 像 ActiveRecord 和 Hibernate 这样的 **对象关系映射（ORM object-relational mapping）** 框架可以减少这个转换层所需的样板代码的数量，但是它们不能完全隐藏这两个模型之间的差异
		- JSON 模型*可能*减少了应用程序代码和存储层之间的阻抗不匹配
			- 缺乏一个模式可能也是一个优势
			- JSON 表示比多表模式具有更好的 **局部性（locality）**
	- ### 多对一和多对多的关系
		- 存储 ID 还是文本字符串，这是个 **副本（duplication）** 问题
		- 当使用 ID 时，对人类有意义的信息（比如单词：Philanthropy）只存储在一处，所有引用它的地方使用 ID（ID 只在数据库中有意义）。当直接存储文本时，对人类有意义的信息会复制在每处使用记录中。
		- 使用 ID 的好处是，ID 对人类没有任何意义，因而永远不需要改变：ID 可以保持不变，即使它标识的信息发生变化。任何对人类有意义的东西都可能需要在将来某个时候改变 —— 如果这些信息被复制，所有的冗余副本都需要更新。这会导致写入开销，也存在不一致的风险（一些副本被更新了，还有些副本没有被更新）。去除此类重复是数据库 **规范化（normalization）** 的关键思想。
		- 在关系数据库中，通过 ID 来引用其他表中的行是正常的，因为连接很容易。在文档数据库中，一对多树结构没有必要用连接，对连接的支持通常很弱
		- **如果数据库本身不支持连接，则必须在应用程序代码中通过对数据库进行多个查询来模拟连接**
	- ### 文档数据库是否在重蹈覆辙？
		- 在多对多的关系和连接已常规用在关系数据库时，文档数据库和 NoSQL 重启了辩论：如何以最佳方式在数据库中表示**多对多关系**
		- **网状模型**
			- 网状模型由一个称为数据系统语言会议（CODASYL）的委员会进行了标准化，并被数个不同的数据库厂商实现；它也被称为 CODASYL 模型
			- CODASYL 模型是层次模型的推广。在层次模型的树结构中，每条记录只有一个父节点；在网络模式中，每条记录可能有多个父节点。
			- 网状模型中记录之间的链接不是外键，而更像编程语言中的指针（同时仍然存储在磁盘上）。访问记录的唯一方法是跟随从根记录起沿这些链路所形成的路径。这被称为 **访问路径（access path）**。
			- 最简单的情况下，访问路径类似遍历链表：从列表头开始，每次查看一条记录，直到找到所需的记录。但在多对多关系的情况中，数条不同的路径可以到达相同的记录，网状模型的程序员**必须跟踪这些不同的访问路径**。
		- **关系模型**
			- 你可以在任何表中插入一个新的行，而不必担心与其他表的外键关系
			- 查询优化器自动决定查询的哪些部分以哪个顺序执行，以及使用哪些索引。这些选择实际上是 “访问路径”，但最大的区别在于它们是由查询优化器自动生成的，而不是由程序员生成
	- ### 关系型数据库与文档数据库在今日的对比
		- 对比点
			- 数据模型（本章）
			- 容错属性（第五章）
			- 处理并发性（第七章）
		- 优势
			- 文档数据模型：架构灵活性，因局部性而拥有更好的性能，以及对于某些应用程序而言更接近于应用程序使用的数据结构
			- 关系模型：为连接提供更好的支持以及支持多对一和多对多的关系
		- **哪种数据模型更有助于简化应用代码？**
			- 如果应用程序中的数据具有类似文档的结构（即，一对多关系树，通常一次性加载整个树），那么使用文档模型可能是一个好主意
			- 但如果你的应用程序确实会用到多对多关系，那么文档模型就没有那么诱人了。尽管可以通过反规范化来消除对连接的需求，但这需要应用程序代码来做额外的工作以确保数据一致性
		- **文档模型中的模式灵活性**
			- 文档数据库有时称为 **无模式（schemaless）**，但这具有误导性，因为读取数据的代码通常假定某种结构 —— 即存在隐式模式，但不由数据库强制执行。一个更精确的术语是 **读时模式**（即 schema-on-read，数据的结构是隐含的，只有在数据被读取时才被解释），相应的是 **写时模式**（即 schema-on-write，传统的关系数据库方法中，模式明确，且数据库确保所有的数据都符合其模式）
			- **模式变更**
				- 文档数据库：写入新的模式数据、在读取时兼容旧的模式
				- 关系数据库：SQL Migration
					- 速度很慢，而且要求停运
						- 大多数关系数据库系统可在几毫秒内执行 `ALTER TABLE` 语句。MySQL 是一个值得注意的例外，它执行 `ALTER TABLE` 时会复制整个表
						- 大型表上运行 `UPDATE` 语句在任何数据库上都可能会很慢，因为每一行都需要重写
			- 当由于某种原因（例如，数据是异构的）集合中的项目并不都具有相同的结构时，读时模式更具优势
		- **查询的数据局部性**
			- 文档通常以单个连续字符串形式进行存储，编码为 JSON、XML 或其二进制变体（如 MongoDB 的 BSON）。如果应用程序经常需要访问整个文档（例如，将其渲染至网页），那么存储局部性会带来性能优势
			- 局部性仅仅适用于同时需要文档绝大部分内容的情况。
				- 数据库通常需要加载整个文档，即使只访问其中的一小部分，这对于大型文档来说是很浪费的。
				- 更新文档时，通常需要整个重写。
				- 只有不改变文档大小的修改才可以容易地原地执行。因此，通常建议保持相对小的文档，并避免增加文档大小的写入
			- 为了局部性而分组集合相关数据的想法并不局限于文档模型
				- Google 的 Spanner 数据库在关系数据模型中提供了同样的局部性属性，允许模式声明一个表的行应该交错（嵌套）在父表内
				- Oracle 类似地允许使用一个称为 **多表索引集群表（multi-table index cluster tables）** 的类似特性
				- Bigtable 数据模型（用于 Cassandra 和 HBase）中的 **列族（column-family）** 概念与管理局部性的目的类似
		- **文档和关系数据库的融合**
			- 越来越多的关系数据库增加了对于文档数据库的支持
				- 大多数关系数据库系统（MySQL 除外）都已支持 XML
				- 从 9.3 版本开始的 PostgreSQL ，从 5.7 版本开始的 MySQL 以及从版本 10.5 开始的 IBM DB2也对 JSON 文档提供了类似的支持级别
			- 某些文档数据库也支持关系
				- RethinkDB 在其查询语言中支持类似关系的连接
				- 一些 MongoDB 驱动程序可以自动解析数据库引用（有效地执行客户端连接，尽管这可能比在数据库中执行的连接慢，需要额外的网络往返，并且优化更少）
			- 随着时间的推移，关系数据库和文档数据库似乎变得越来越相似，这是一件好事：数据模型相互补充，如果一个数据库能够处理类似文档的数据，并能够对其执行关系查询，那么应用程序就可以使用最符合其需求的功能组合。
			- 关系模型和文档模型的混合是未来数据库一条很好的路线。
## 数据查询语言
	- 当引入关系模型时，关系模型包含了一种查询数据的新方法：SQL 是一种 **声明式** 查询语言，而 IMS 和 CODASYL 使用 **命令式** 代码来查询数据库。
		- 命令式语言告诉计算机以特定顺序执行某些操作。可以想象一下，逐行地遍历代码，评估条件，更新变量，并决定是否再循环一遍。
		- 在声明式查询语言（如 SQL 或关系代数）中，你只需指定所需数据的模式 - 结果必须符合哪些条件，以及如何将数据转换（例如，排序，分组和集合） - 但不是如何实现这一目标。数据库系统的查询优化器决定使用哪些索引和哪些连接方法，以及以何种顺序执行查询的各个部分。
	- ### MapReduce查询
		- MapReduce 既不是一个声明式的查询语言，也不是一个完全命令式的查询 API，而是处于两者之间：查询的逻辑用代码片段来表示，这些代码片段会被处理框架重复性调用。它基于 `map`（也称为 `collect`）和 `reduce`（也称为 `fold` 或 `inject`）函数，两个函数存在于许多函数式编程语言中。
		- map 和 reduce 函数在功能上有所限制：它们必须是 **纯** 函数，这意味着它们只使用传递给它们的数据作为输入，它们不能执行额外的数据库查询，也**不能有任何副作用**。这些限制**允许数据库以任何顺序运行任何功能，并在失败时重新运行它们**。然而，map 和 reduce 函数仍然是强大的：它们可以解析字符串、调用库函数、执行计算等等。
		- 能够**在查询中使用 JavaScript 代码**是高级查询的一个重要特性，但这不限于 MapReduce，一些 SQL 数据库也可以用 JavaScript 函数进行扩展
		- 问题
			- MapReduce 的一个可用性问题是，必须编写两个密切合作的 JavaScript 函数，这通常比编写单个查询更困难。
			- 此外，声明式查询语言为查询优化器提供了更多机会来提高查询的性能。
			- 基于这些原因，MongoDB 2.2 添加了一种叫做 **聚合管道** 的声明式查询语言的支持
## 图数据模型
	- 关系模型可以处理多对多关系的简单情况，但是随着数据之间的连接变得更加复杂，将数据建模为图显得更加自然
	- 一个图由两种对象组成：
		- **顶点**（vertices，也称为 **节点**，即 nodes，或 **实体**，即 entities）
		- **边**（edges，也称为 **关系**，即 relationships，或 **弧**，即 arcs）
	- 多种数据可以被建模为一个图
		- 社交图谱
		- 网络图谱
		- 公路或铁路网络
	- 有几种不同但相关的方法用来构建和查询图表中的数据
		- 构建
			- 属性图模型（由 Neo4j，Titan 和 InfiniteGraph 实现）
			- 三元组存储（triple-store）模型（由 Datomic、AllegroGraph 等实现）
		- 声明式查询语言
			- Cypher
			- SPARQL
			- Datalog
		- 其他
			- Gremlin 图查询语言
			- Pregel 图处理框架（第十章）
	- ### 属性图
	  collapsed:: true
		- 在属性图模型中
			- 每个顶点（vertex）包括
				- 唯一的标识符
				- 一组出边（outgoing edges）
				- 一组入边（ingoing edges）
				- 一组属性（键值对）
			- 每条边（edge）包括：
				- 唯一标识符
				- 边的起点（**尾部顶点**，即 tail vertex）
				- 边的终点（**头部顶点**，即 head vertex）
				- 描述两个顶点之间关系类型的标签
				- 一组属性（键值对）
		- 可以将图存储看作由两个关系表组成：一个存储顶点，另一个存储边
			- 利用 Postgres 的 JSON 扩展存储
				- ```sql
				  CREATE TABLE vertices (
				    vertex_id  INTEGER PRIMARY KEY,
				    properties JSON
				  );
				  
				  CREATE TABLE edges (
				    edge_id     INTEGER PRIMARY KEY,
				    tail_vertex INTEGER REFERENCES vertices (vertex_id),
				    head_vertex INTEGER REFERENCES vertices (vertex_id),
				    label       TEXT,
				    properties  JSON
				  );
				  
				  CREATE INDEX edges_tails ON edges (tail_vertex);
				  CREATE INDEX edges_heads ON edges (head_vertex);
				  ```
	- ### Cypher 查询语言
		- Cypher 是属性图的声明式查询语言，为 Neo4j 图形数据库而发明
		- 插入（示例）
		  collapsed:: true
			- ```cypher
			  CREATE
			    (NAmerica:Location {name:'North America', type:'continent'}),
			    (USA:Location      {name:'United States', type:'country'  }),
			    (Idaho:Location    {name:'Idaho',         type:'state'    }),
			    (Lucy:Person       {name:'Lucy' }),
			    (Idaho) -[:WITHIN]->  (USA)  -[:WITHIN]-> (NAmerica),
			    (Lucy)  -[:BORN_IN]-> (Idaho)
			  ```
			- ![](https://github.com/Vonng/ddia/raw/master/img/fig2-5.png)
		- 查询（示例）：查找所有从美国移民到欧洲的人
		  collapsed:: true
			- ```cypher
			  MATCH
			    (person) -[:BORN_IN]->  () -[:WITHIN*0..]-> (us:Location {name:'United States'}),
			    (person) -[:LIVES_IN]-> () -[:WITHIN*0..]-> (eu:Location {name:'Europe'})
			  RETURN person.name
			  ```
		- 等价的 sql 查询
		  collapsed:: true
			- ```sql
			  WITH RECURSIVE
			    -- in_usa 包含所有的美国境内的位置 ID
			      in_usa(vertex_id) AS (
			      SELECT vertex_id FROM vertices WHERE properties ->> 'name' = 'United States'
			      UNION
			      SELECT edges.tail_vertex FROM edges
			        JOIN in_usa ON edges.head_vertex = in_usa.vertex_id
			        WHERE edges.label = 'within'
			    ),
			    -- in_europe 包含所有的欧洲境内的位置 ID
			      in_europe(vertex_id) AS (
			      SELECT vertex_id FROM vertices WHERE properties ->> 'name' = 'Europe'
			      UNION
			      SELECT edges.tail_vertex FROM edges
			        JOIN in_europe ON edges.head_vertex = in_europe.vertex_id
			        WHERE edges.label = 'within' ),
			  
			    -- born_in_usa 包含了所有类型为 Person，且出生在美国的顶点
			      born_in_usa(vertex_id) AS (
			        SELECT edges.tail_vertex FROM edges
			          JOIN in_usa ON edges.head_vertex = in_usa.vertex_id
			          WHERE edges.label = 'born_in' ),
			  
			    -- lives_in_europe 包含了所有类型为 Person，且居住在欧洲的顶点。
			      lives_in_europe(vertex_id) AS (
			        SELECT edges.tail_vertex FROM edges
			          JOIN in_europe ON edges.head_vertex = in_europe.vertex_id
			          WHERE edges.label = 'lives_in')
			  
			    SELECT vertices.properties ->> 'name'
			    FROM vertices
			      JOIN born_in_usa ON vertices.vertex_id = born_in_usa.vertex_id
			      JOIN lives_in_europe ON vertices.vertex_id = lives_in_europe.vertex_id;
			  ```
		- 同一个查询，用某一个查询语言可以写成 4 行，而用另一个查询语言需要 29 行，这恰恰说明了不同的数据模型是为不同的应用场景而设计的。选择适合应用程序的数据模型非常重要。
	- ### 三元组存储和 SPARQL
		- 在三元组存储中，所有信息都以非常简单的三部分表示形式存储（**主语**，**谓语**，**宾语**）。例如，三元组 **(吉姆, 喜欢, 香蕉)** 中，**吉姆** 是主语，**喜欢** 是谓语（动词），**香蕉** 是对象。
			- 主语相当于图中的一个顶点
			- 宾语
				- 原始数据类型中的值，例如字符串或数字。在这种情况下，三元组的谓语和宾语相当于主语顶点上的属性的键和值。例如，`(lucy, age, 33)` 就像属性 `{“age”：33}` 的顶点 lucy。
				- 图中的另一个顶点。在这种情况下，谓语是图中的一条边，主语是其尾部顶点，而宾语是其头部顶点。例如，在 `(lucy, marriedTo, alain)` 中主语和宾语 `lucy` 和 `alain` 都是顶点，并且谓语 `marriedTo` 是连接他们的边的标签。
		- 表示（示例）
			- ```turtle
			  @prefix : <urn:example:>.
			  _:lucy     a       :Person.
			  _:lucy     :name   "Lucy".
			  _:lucy     :bornIn _:idaho.
			  _:idaho    a       :Location.
			  _:idaho    :name   "Idaho".
			  _:idaho    :type   "state".
			  _:idaho    :within _:usa.
			  _:usa      a       :Location
			  _:usa      :name   "United States"
			  _:usa      :type   "country".
			  _:usa      :within _:namerica.
			  _:namerica a       :Location
			  _:namerica :name   "North America"
			  _:namerica :type   :"continent"
			  ```
			- 图的顶点被写为：`_：someName`。这个名字并不意味着这个文件以外的任何东西。它的存在只是帮助我们明确哪些三元组引用了同一顶点。
			- 当谓语表示边时，该宾语是一个顶点，如 `_:idaho :within _:usa.`。当谓语是一个属性时，该宾语是一个字符串，如 `_:usa :name"United States"`
			- 可以使用分号来说明关于同一主语的多个事情
				- ```turtle
				  @prefix : <urn:example:>.
				  _:lucy      a :Person;   :name "Lucy";          :bornIn _:idaho.
				  _:idaho     a :Location; :name "Idaho";         :type "state";   :within _:usa
				  _:usa       a :Loaction; :name "United States"; :type "country"; :within _:namerica.
				  _:namerica  a :Location; :name "North America"; :type "continent".
				  ```
		- **语义网**
			- 如果你深入了解关于三元组存储的信息，可能会陷入关于**语义网**的讨论漩涡中
			- 三元组存储模型其实是完全独立于语义网存在的；但是，由于在很多人眼中这两者紧密相连
			- 语义网是一个简单且合理的想法：网站已经将信息发布为文字和图片供人类阅读，为什么不将信息作为机器可读的数据也发布给计算机呢？（基于三元组模型的）**资源描述框架**（**RDF**），被用作不同网站以统一的格式发布数据的一种机制，允许来自不同网站的数据自动合并成 **一个数据网络** —— 成为一种互联网范围内的 “通用语义网数据库”。
			- **数据模型**
				- Turtle 语言是一种用于 RDF 数据的人类可读格式。有时候，RDF 也可以以 XML 格式编写，不过完成同样的事情会相对啰嗦
				- ```xml
				  <rdf:RDF xmlns="urn:example:"
				           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
				      <Location rdf:nodeID="idaho">
				          <name>Idaho</name>
				          <type>state</type>
				          <within>
				              <Location rdf:nodeID="usa">
				                  <name>United States</name>
				                  <type>country</type>
				                  <within>
				                      <Location rdf:nodeID="namerica">
				                          <name>North America</name>
				                          <type>continent</type>
				                      </Location>
				                  </within>
				              </Location>
				          </within>
				      </Location>
				      <Person rdf:nodeID="lucy">
				          <name>Lucy</name>
				          <bornIn rdf:nodeID="idaho"/>
				      </Person>
				  </rdf:RDF>
				  ```
				- RDF 有一些奇怪之处，因为它是为了在互联网上交换数据而设计的。三元组的主语，谓语和宾语通常是 URI。例如，谓语可能是一个 URI，如 `<http://my-company.com/namespace#within>` 或 `<http://my-company.com/namespace#lives_in>`，而不仅仅是 `WITHIN` 或 `LIVES_IN`。这个设计背后的原因为了让你能够把你的数据和其他人的数据结合起来，如果他们赋予单词 `within` 或者 `lives_in` 不同的含义，两者也不会冲突，因为它们的谓语实际上是 `<http://other.org/foo#within>` 和 `<http://other.org/foo#lives_in>`。
	- ### SPARQL 查询语言
		- **SPARQL** 是一种用于三元组存储的面向 RDF 数据模型的查询语言（它是 SPARQL 协议和 RDF 查询语言的缩写，发音为 “sparkle”）
		- SPARQL 是一种很好的查询语言 —— 尽管它构想的语义网从未实现，但它仍然是一种可用于应用程序内部的强大工具。
		-