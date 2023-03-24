- [link](https://github.com/Vonng/ddia/blob/master/ch4.md)
-
- 从内存中表示到字节序列的转换称为 **编码（Encoding）** （也称为 **序列化（serialization）** 或 **编组（marshalling）**），反过来称为 **解码（Decoding）**（**解析（Parsing）**，**反序列化（deserialization）**，**反编组 (unmarshalling）**）。
-
### 语言特定的格式
	- 许多编程语言都内建了将内存对象编码为字节序列的支持
		- Java 有 `java.io.Serializable` 【1】，Ruby 有 `Marshal`【2】，Python 有 `pickle`【3】，等等。许多第三方库也存在，例如 `Kryo for Java` 【4】