<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/runtime-1.md
 * @Author: liujianwei1
 * @Date: 2021-05-18 15:06:35
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
灵魂拷问
- `@babel/runtime`是什么？  
- `@babel/plugin-transform-runtime` 又是什么？    
- `@babel/runtime`和`@babel/plugin-transform-runtime`之间是什么关系？

问题我们暂且搁置一下，我们先看一下一个代码演示  

[源代码地址tutor-runtime01](https://github.com/rupid/tutor-babel/tree/main/packages/tutor-runtime01)  
安装npm包
```bash
npm install --save-dev @babel/cli @babel/core  @babel/preset-env 
```
添加`.babelrc`配置
```json
{
  "presets": [
    [
      "@babel/preset-env"
    ]
  ]
}
```
编译之前的代码：
```javascript
async function foo () {
  return 1
}
```
由于async 在chrome55才支持，所以我们设置`..browserslistrc`内容如下：
```json
chrome 50
```

执行`npm run build`,查看编译后的结果
```javascript
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = _asyncToGenerator(function* () {
    return 1;
  });
  return _foo.apply(this, arguments);
}
```
编译之后，发现`@babel/preset-env`在做语法转换的时候，注入了这些函数声明，以便语法转换后使用。这些函数声明称之为`辅助函数`。

问题来了，假设你是工具开发者，你编译发布后的npm包里面 包含了很多类似 `asyncGeneratorStep`和`_asyncToGenerator`自定义辅助函数。如果有一个业务的项目，依赖了10个npm包，每个npm包都自定了类似 `asyncGeneratorStep`和`_asyncToGenerator`自定义辅助函数,会导致包的体积非常大。所以，接下来要解决如何将相同的辅助函数共用。

如何解决呢？

答案：把这些辅助函数声明放到一个npm包里面，需要的时候直接通过`import`或`require`方式从npm包引入。这样即使在多的文件，但是引入路径是一样的。通过webpack这一类的构建工具打包的时候，npm包只会引入一次，达到了复用的效果。

`@babel/runtime`就是上面说的 将所有辅助函数集中到一起的npm包

***
***
***
### 如何使用`@babel/runtime`

[源代码地址tutor-runtime02](https://github.com/rupid/tutor-babel/tree/main/packages/tutor-runtime02)
上面我们提到，`@babel/runtime`包含了所有辅助函,实际开发中，不可能手动引入`@babel/runtime/helpers`里面的辅助函数。需要借助`@babel/plugin-transform-runtime`。`@babel/plugin-transform-runtime`完成
- 自动移除语法转换后内联的辅助函数
- 引入`@babel/runtime/helpers`里的辅助函数来替代辅助函数

具体看例子：
安装npm包
```bash
 npm i    @babel/runtime
 npm i -D @babel/cli @babel/core  @babel/preset-env @babel/plugin-transform-runtime
```

添加`.babelrc`配置
```json
{
  "presets": [
    [
      "@babel/preset-env"
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```
执行`npm run build` 查看结果：
```javascript
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = (0, _asyncToGenerator2.default)(function* () {
    return 1;
  });
  return _foo.apply(this, arguments);
}

```
可以看到，编译后的结果中，自动导入了所需要的辅助函数。

细心的人可能发现了，本章节的两个demo中，并没有设置`babel/preset-env`的参数。也就是 只做了语法转换，没有补齐API。下一篇文章，我们将继续讨论如何`@babel/plugin-transform-runtime`如何补齐API

