<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/runtime-2.md
 * @Author: liujianwei1
 * @Date: 2021-05-18 16:57:30
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
[官方文档](https://babeljs.io/docs/en/babel-plugin-transform-runtime)    
[源代码地址tutor-runtime03](https://github.com/rupid/tutor-babel/tree/main/packages/tutor-runtime03)
[源代码地址tutor-runtime04](https://github.com/rupid/tutor-babel/tree/main/packages/tutor-runtime04)

@babel/plugin-transform-runtime解决了两个问题：
- 1：自动移除语法转换后内联的辅助函数，使用`@babel/runtime/helpers`里的辅助函数来替代；
- 2：当代码里使用了`core-js`的API，自动引入`@babel/runtime-corejs3/core-js-stable/`，以此来替代全局引入的`core-js/stable`;
其中1 已经在上一节中讲过，了解2之前，我们先简单的了解一下[core-js](https://github.com/zloirock/core-js) 

### core-js功能
[core-js](https://github.com/zloirock/core-js) 是一个由 Lerna 搭建的 Monorepo的项目，总共有5个包：
- core-js 实现的基础垫片能力，是整个 core-js 的逻辑核心
- core-js-pure 提供了不污染全局变量的垫片能力
- core-js-compact 维护了按照browserslist规范的垫片需求数据，来帮助我们找到“符合目标环境”的 polyfills 需求集合
- core-js-builder 可以结合 core-js-compact 以及 core-js，并利用 webpack 能力，根据需求打包出 core-js 代码
- core-js-bundle  可以被 Node.js 服务使用，构建出不同场景的垫片包

在[@babel/polyfill](/md/babel-polyfill)章节里面，我们通过如下方式 `全局`引入polyfill
```javascript
import `@babel/polyfill`
//或者 import 'core-js'
```
这种方式是在全局补齐了API，对浏览器全局对象进行了重新赋值。例如 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise),重写了window.Promise及其原型链

所以，当不想改变或补齐浏览器的window.Promise，就不能手动的导入`@babel/polyfill`或`core-js/stable与regenerator-runtime/runtime`。此时，我们可以借助`@babel/plugin-transform-runtime`完成 API转换。

`@babel/plugin-transform-runtime`参数很多,我们先看一下`corejs`。

| corejs option     | Install command |
| ----------- | ----------- |
| false    | npm install --save @babel/runtime     |
| 2      | npm install --save @babel/runtime-corejs2      |
| 3   | npm install --save @babel/runtime-corejs3        |

### corejs:2和corejs:3区别
Please note that corejs: 2 only supports global variables (e.g. Promise) and static properties (e.g. Array.from), while corejs: 3 also supports instance properties (e.g. [].includes)

配置`.babelrc`
```json
{
  "presets": [
    [
      "@babel/preset-env"
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        //这里使用的2版本 对应需要安装npm install --save @babel/runtime-corejs2
        "corejs": 2
      }
    ]
  ]
}
```
安装npm包
```bash
npm i --save @babel/runtime-corejs2
npm i --save-dev @babel/cli @babel/core  @babel/preset-env @babel/plugin-transform-runtime
```

编译前代码：
```javascript
Promise.resolve()
```
编译后代码：
```javascript
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

_promise.default.resolve();

```
   
### `corejs:3`
[源代码地址](https://github.com/rupid/tutor-babel/tree/main/packages/tutor-runtime04)

