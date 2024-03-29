title:: Readwise/Highlights/为什么基础服务不应该高可用 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么基础服务不应该高可用 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-unstable-infrastructure
- 想要让服务达到高可用并不是一个容易的事情，不仅服务运行过程中出现的事故会影响可用时间，用于维护的计划停机和更新其实也会影响服务整体的可用时间，如果一个服务要求可用性为 99.95%，那么全年不工作的时间可能只有 4.38 小时，每个月只能宕机 21.9 分钟。 #Highlight #[[2022-07-01]]
- 可用性不可用时间（每年）不可用时间（每月）99%87.6h7.3h99.9%8.76h0.73h99.99%52.56min4.38min99.999%5.26min26.3s99.9999%31.56s2.63s #Highlight #[[2022-07-01]]
- 假设我们需要达到 4 个 9 的可用性（99.99%），全年的不可用时间只有不足 1 小时，每个月的不可用时间只有 4.38 分钟 #Highlight #[[2022-07-01]]
- 虽然说所有的开发者都希望基础服务能够提供尽可能高的可用性和 SLA，但是极高的 SLA 对于整体业务的长期稳定并不是一件好的事情，可能在短期内能够提供较大的价值，但是从长远来看可能会造成更大的破坏 #Highlight #[[2022-07-01]]
- 随着可用性的不断提升，提高可用性的边际成本会以指数的量级升高，而服务宕机造成的损失也会随着服务的可用性的提高急速下降 #Highlight #[[2022-07-01]]
- 服务提供商提供的服务是为了获得有形和无形的资产，服务商对外宣称的『高可用』其实只是宣传的一种手段，很多时候高可用并不是服务方主要考虑的因素，真正促使它提供高可用服务的还是背后的直接经济利益和造成事故时需要赔偿的名誉和金钱损失 #Highlight #[[2022-07-01]]