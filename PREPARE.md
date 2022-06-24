## 同步配置

```shell
mv ~/.logseq/plugins ~/.logseq/plugins-bak-$(date +%Y%m%d)
mv ~/.logseq/settings ~/.logseq/settings-bak-$(date +%Y%m%d)
ln -s `pwd`/plugins ~/.logseq/plugins
ln -s `pwd`/settings ~/.logseq/settings
```
