- 在近今年中，我长期与 CLI 程序打交道，可以说对于目前 Go 的命令行框架相当不满意
-
- 功能点
	- 采用声明 + go generate 的形式，保证易用性与编译期检测并存
		- ```go
		  struct Flag {
		    Name string `flag:"name" shorhand:"n" default:"hello" help="The name"`
		    Perfect bool `reverse:true`
		    ComplexValue string `parser:"parse_complex"`
		    CustomValue CustomType
		    
		    *xflag.App
		  }
		  ```
		- 支持自定义 flag 名称，默认名称为 name -> SomeName to some-name
		- bool 类型支持 reverse
		- 支持自定义 parser
		- 支持自定义类型
		- 支持