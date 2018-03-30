# Little Tools

## 说明
实用小工具包

``` javaScript
const tools = require('littleTools').tools;
tools.matchString(string,reference); //模糊匹配字符串
tools.loadYaml(file); //加载yaml文件为对象
tools.randomString(length); //生成指定长度到随机字符串，数字+小写字母组合
tools.readConfig(option); //读取配置文件
```

express 中间件
``` javaScript
const mw=require('littleTools').express;
/*
处理request header中accept属性相应的数据格式，默认application/json，
如果有使用全局错误处理中间件，请放在错误处理之前
*/
app.use(mw.requestAccept);
```


