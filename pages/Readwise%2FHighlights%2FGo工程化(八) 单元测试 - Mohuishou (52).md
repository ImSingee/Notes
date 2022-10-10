title:: Readwise/Highlights/Go工程化(八) 单元测试 - Mohuishou (52)
author:: [[lailin.xyz]]
full-title:: Go工程化(八) 单元测试 - Mohuishou
category:: #articles
url:: https://lailin.xyz/post/go-training-week4-unit-test.html

- service这一层主要处理的 dto 和 do 数据之间的相互转换，本身是不含什么业务逻辑的，目前我们使用的是 http，所以在这一层的测试一般会使用 httptest 来模拟实际请求的测试。然后在对 usecase 层的调用上，我们使用 gomock mock 掉相关的接口，简化我们的测试。如果你不想写的那么麻烦，也可以不用启用 httptest 来测试，直接测试 service 层的代码也是可以的，不过这样的话，service 层的代码测试的内容就没有多少了，也就是看转换数据的时候符不符合预期。这一层主要完成的测试是参数的校验是否符合预期数据的转换是否符合预期，如果你像我一样偷懒使用了类似 copier 的工具的话一定要写这部分的单元测试，不然还是很容易出错，容易字段名不一致导致 copier 的工作不正常当然如果时间有限的话，这一层的测试也不是必须的，因为接入层相对来说变化也比较快一点，这是说写了单元测试，基本上在测试阶段很少会出现由于参数的问题提交过来的 bug #Highlight #[[2021-04-01]]