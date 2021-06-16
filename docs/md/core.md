<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/core.md
 * @Author: liujianwei1
 * @Date: 2021-05-23 21:10:32
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
[@babel/core](https://babeljs.io/docs/en/babel-core) 是 Babel 实现转换的核心，它可以根据配置，进行源码的编译转换。@babel/cli、@babel/loader都依赖这个包。
```javascript
const babel = require("@babel/core");

babel.transform("code();", options, function(err, result) {
  result.code;
  result.map;
  result.ast;
});
```