retrieved:: [[2022-02-01]], 2:41:22 PM
              author:: [[mp.weixin.qq.com]]
              category:: [[articles]]
              source:: [[command]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
- ## [[Readwise Highlights]]
	- 无论是哪一种数据库，它们所存储的都是结构化数据，主要应用的领域是联机事务处理（OLTP），也就是我们程序员所熟悉的增删改查业务。
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 这些数据不但可以支撑业务的运行，也可以用于生成商业报表，进行数据分析，提供有价值的决策参考。这些数据分析和生成报表的处理操作，被称为联机分析处理（OLAP）。
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 传统数据库擅长的是快速地对小规模数据进行增删改查，并不擅长大规模数据的快速读取。
	  
	  于是，人们发明了一种全新的数据存储方式，并把原本分散在不同项目当中的业务数据进行抽取、清洗、转换、加载，最终汇总成为一系列面向主题的数据集合，按照全新的方式进行存储。
	  
	  这种全新的存储方式，被称为数据仓库（Data Warehouse）；把数据进行抽取、清洗、转换、加载的过程，被称为ETL（Extract Transform Load）。
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 数据仓库当中存储的数据，同样是结构化数据。
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 数据库用于业务处理，数据仓库用于数据分析
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 发现不仅是结构化的数据具有分析价值，许多非结构化的数据，例如用户日志、电子邮件、PDF等等，同样具有可观的分析和学习价值
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 这些五花八门的数据，如果统一按照ETL的方式进行加工处理，实在是不太现实，那么索性把它们按照原始格式汇总在一起吧。这样汇总起来的庞大集合，被存储在了数据湖（Data Lake）当中
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 结构化的，有各种关系型数据库的行和列。
	  
	  半结构化的，有JSON、XML、CSV。
	  
	  非结构化的，有电子邮件、PDF、各种文档
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 智能湖仓（Lake House）架构
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::