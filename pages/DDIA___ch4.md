- [link](https://github.com/Vonng/ddia/blob/master/ch4.md)
-
- 从内存中表示到字节序列的转换称为 **编码（Encoding）** （也称为 **序列化（serialization）** 或 **编组（marshalling）**），反过来称为 **解码（Decoding）**（**解析（Parsing）**，**反序列化（deserialization）**，**反编组 (unmarshalling）**）。
-
### 语言特定的格式
collapsed:: true
	- 许多编程语言都内建了将内存对象编码为字节序列的支持
		- Java 有 `java.io.Serializable`
		- Ruby 有 `Marshal`
		- Python 有 `pickle`
	- 这些编码库非常方便。但是有一些深层次的问题
		- 通常与特定的编程语言深度绑定，其他语言很难读取这种数据
		- 为了恢复相同对象类型的数据，解码过程需要 **实例化任意类** 的能力，这通常是安全问题的一个来源
		- 在这些库中，数据版本控制通常是事后才考虑的。因为它们旨在快速简便地对数据进行编码，所以往往忽略了前向后向兼容性带来的麻烦问题。
		- 效率（编码或解码所花费的 CPU 时间，以及编码结构的大小）往往也是事后才考虑的。
	- 除非临时使用，采用语言内置编码通常是一个**坏主意**。\
### JSON、XML和二进制变体
collapsed:: true
	- JSON，XML 和 CSV 属于文本格式，因此具有人类可读性（尽管它们的语法是一个热门争议话题）
		- **数字（numbers）** 编码有很多模糊之处。在 XML 和 CSV 中，无法区分数字和碰巧由数字组成的字符串（除了引用外部模式）。 JSON 虽然区分字符串与数字，但并不区分整数和浮点数，并且不能指定精度。
		- JSON 和 XML 对 Unicode 字符串（即人类可读的文本）有很好的支持，但是它们不支持二进制数据（即不带 **字符编码（character encoding）** 的字节序列）。
			- 人们通过使用 Base64 将二进制数据编码为文本来绕过此限制。其特有的模式标识着这个值应当被解释为 Base64 编码的二进制数据。这种方案虽然管用，但比较 Hacky，并且会增加三分之一的数据大小。
		- 模式（可以理解为类型定义）
			- XML 【11】和 JSON 【12】都有可选的模式支持。
			- 这些模式语言相当强大，所以学习和实现起来都相当复杂。
			- XML 模式的使用相当普遍，但许多基于 JSON 的工具才不会去折腾模式。对数据的正确解读（例如区分数值与二进制串）取决于模式中的信息，因此不使用 XML/JSON 模式的应用程序可能需要对相应的编码 / 解码逻辑进行硬编码。
			- CSV 没有任何模式，因此每行和每列的含义完全由应用程序自行定义。如果应用程序变更添加了新的行或列，那么这种变更必须通过手工处理。 CSV 也是一个相当模糊的格式（如果一个值包含逗号或换行符，会发生什么？）。尽管其转义规则已经被正式指定【13】，但并不是所有的解析器都正确的实现了标准。
	- 二进制编码
		- 对于仅在组织内部使用的数据，使用最小公约数式的编码格式压力较小。例如，可以选择更紧凑或更快的解析格式。虽然对小数据集来说，收益可以忽略不计；但一旦达到 TB 级别，数据格式的选型就会产生巨大的影响。
		- JSON 比 XML 简洁，但与二进制格式相比还是太占空间。这一事实导致大量二进制编码版本 JSON（MessagePack、BSON、BJSON、UBJSON、BISON 和 Smile 等） 和 XML（例如 WBXML 和 Fast Infoset）的出现。
			- 这些格式中的一些扩展了一组数据类型（例如，区分整数和浮点数，或者增加对二进制字符串的支持）
			- 另一方面，它们没有改变 JSON / XML 的数据模型。特别是由于它们没有规定模式，所以它们需要在编码数据中包含所有的对象字段名称
			- 因为无法省略字段名称，因此实际上压缩比例相当有限
				- 空间节省了一丁点（以及解析加速）是否能弥补可读性的损失，谁也说不准。
### Thrift与Protocol Buffers
	- Apache Thrift 和 Protocol Buffers（protobuf）是基于相同原理的二进制编码库。
	- Protocol Buffers 最初是在 Google 开发的，Thrift 最初是在 Facebook 开发的。
	- Thrift 和 Protocol Buffers 都需要一个模式来编码任何数据，都需要提前使用**接口定义语言（IDL）** 来描述模式。
		- ```thrift
		  struct Person {
		      1: required string       userName,
		      2: optional i64          favoriteNumber,
		      3: optional list<string> interests
		  }
		  ```
		- ```protobuf
		  message Person {
		      required string user_name       = 1;
		      optional int64  favorite_number = 2;
		      repeated string interests       = 3;
		  }
		  ```
		- Thrift 和 Protocol Buffers 每一个都带有一个代码生成工具，它采用了类似于这里所示的模式定义，并且生成了以各种编程语言实现模式的类。你的应用程序代码可以调用此生成的代码来对模式的记录进行编码或解码。
		- 编码与 JSON/XML 的二进制变体相比，最大的区别是**没有字段名**，相反，编码数据**包含字段标签**（定义中出现的数字）
		- Thrift
			- 包括 BinaryProtocol 和 CompactProtocol
			- CompactProtocol 相比于 BinaryProtocol 编码结果更短
				- 将字段类型和标签号打包到单个字节中（BinaryProtocol 是分开的）
				- 并使用可变长度整数（BinaryProtocol 是定长的）
		- Protocol Buffers
			- 与 Thrift CompactProtocol 类似
			- required 和 optional 对于二进制编码没有影响
				- 采用运行时检查
				- 注：required 和 optional 定义是 PB2 中的，在 PB3 中一切都是 optional，另外在 PB3 中引入了另外一种单独的 optional 关键字（称为 experimental optional）
		- 字段变更
			- 添加字段：向前兼容需注意 required
			- 删除字段：不能删除 required
### Avro