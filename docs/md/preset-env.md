<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/preset-env.md
 * @Author: liujianwei1
 * @Date: 2021-05-17 15:39:07
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
[官方文档](https://babeljs.io/docs/en/babel-preset-env)  
>@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!


翻译过来就是`@babel/preset-env`会根据目标环境来进行语法转换和打补丁。例如下面配置：
```json
{
  "presets": [
    [
      "@babel/preset-env",//> @babel/env是@babel/preset-env的简写
      {
        //https://babeljs.io/docs/en/babel-preset-env#targets
        "targets": "defaults"
      }
    ]
  ]
}
```


在[快速开始](./start.md) 章节中，我们使用了`@babel/preset-env`展示了语法转换。本节，我们继续学习 通过配置参数项的方式去做语法转换和按需打补丁

最新的`@babel/preset-env` 参数总共有15个，我们重点学习四个：
- `targets`
- `useBuiltIns`
- `modules`
- `corejs`

这四个参数很重要，其他的参数很少使用，大家私底下做一下了解，特殊场景需要时，再去看文档

对于preset，当不需要对其设置参数的时，其只需要把该preset的名字放入presets对于的数组里即可，例如
```json
{
  "presets": ["@babel/preset-env"]
}
```

如果需要对某个preset设置参数，格式如下：
```json
{
  "presets": [ ["@babel/preset-env",{"targets": "defaults"}] ]
}
```

## 目标环境配置表
在[快速开始](./start.md) 章节中,我们提到过目标环境配置表[browserslist](https://github.com/browserslist/browserslist)，也在用Vue或者React官方cli工具初始化的项目的package.json里面看到过`browserslist`。具体看一下下面配置含义：
```json
  "browserslist": [
    "> 2%",
    "not ie <= 8"
  ]
```
上面的配置含义是，目标环境是市场份额大于2%的浏览器并且不考虑IE8及以下的IE浏览器。

目标环境配置表的作用是 指定了代码要运行在那些浏览器或者node.js环境，确定了代码运行的目标环境。

`Autoprefixer`、`Postcss`等就可以根据 `browserslist`的配置，自动判断是否要增加CSS前缀（例如'-webkit-'）。`@babel/preset-env`预设也会读取`browserslist`的配置

如果我们的`@babel/preset-env`不设置任何参数，Babel就会完全根据`browserslist`的配置来做语法转换。如果没有`browserslist`，那么Babel就会把所有ES6的语法转换成ES5版本

[快速开始](./start.md) 章节例子中，既没有添加 `browserslist`，也没有给 `@babel/preset-env`设置参数，ES6箭头函数语法被转换成了ES5的函数定义语法。
编译前：
```javascript
let number1 = 10
let number2 = 20
const sum = (num1, num2) => num1 + num2
```
编译后：
```bash
"use strict";

var number1 = 10;
var number2 = 20;

var sum = function sum(num1, num2) {
  return num1 + num2;
};

```
接下来，我们在[Demo](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env) 项目的根目录下面，添加`.browserslistrc`配置,内容如下：
```json
chrome 62
```
> 注意：字符串两边不要添加引号

运行`babel ./src/index.js --out-file ./dist/index.js`查看`dist/index.js`结果
```javascript
//新的语法
let number1 = 10;
let number2 = 20;

const sum = (num1, num2) => num1 + num2;
```
转换后的代码仍然是箭头函数，因为`Chrome62`已经实现了箭头函数语法，所以不会转换成ES5的函数定义语法。

现在把`.browserslistrc`中的`Chrome62` 降级为 `Chrome36`,运行`babel ./src/index.js --out-file ./dist/index.js`查看`dist/index.js`结果
```javascript
var number1 = 10;
var number2 = 20;

var sum = function sum(num1, num2) {
  return num1 + num2;
};
```
转换后的代码是ES5的函数定义语法，因为Chrome36不支持箭头函数语法。
>注意:Babel使用`browserslist`的配置功能依赖于`@babel/preset-env`，如果Babel没有配置任何预设或插件，那么Babel对转换的代码会不做任何处理，原封不动生成和转换前一样代码

以上内容，展示了`@babel/preset-env`对源代码中，在`browserslist`设定的目标环境不支持语法进行了编译降级处理。

接下来继续学习`@babel/preset-env`是如何通过设置参数，去实现对目标环境不支持的特性API进行部分引用。

## targets
取值范围
- 字符串：`string` 
- 字符串数组： `Array<string>` 
- 字符串对象 ` { [string]: string }`  
默认值空对象{}。 参数项的写法与browserslist是一样的，例如：
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
      "targets": {
         "chrome": "58",
         "ie": "11"
       }
      }
    ]
  ]
}
```
`@babel/preset-env`中的`target`优先级高于`browserslist`的配置。
> 推荐使用browserslist的配置,不要去单独配置@babel/preset-env的targets

## useBuiltIns
取值范围：
- `usage`
- `entry`
- `false`  
默认值为：false

useBuiltIns的取值 决定了`@babel/preset-env`如何处理`polyfill`
- 没有设置该参数或者取了默认值false，polyfill就会全部引入。
- 取值为"entry"或"usage"的时候，会根据配置的目标环境找出需要的polyfill进行部分引入

#### entry
[源代码地址](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env02)   
`@babel/polyfill` 结合 `@babel/preset-env` + `useBuiltins（entry）` + `browserslist` 的方案比较流行，但不是最优方案。`@babel/preset-env` 定义了 Babel 所需插件预设，同时由 Babel 根据 `browserslist` 配置的支持环境，自动按需加载该配置环境需要的`所有polyfills`。
Babel配置
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

安装npm包
```bash
  npm install --save-dev @babel/cli @babel/core  @babel/preset-env
  npm install --save @babel/polyfill
```

编译前代码：
```javascript
//手动引入@babel/polyfill
//useBuiltIns的取值为entry的之后，需要手动的显示导入`@babel/polyfill`(或者在 webpack的entry入口导入)
import '@babel/polyfill'
const array1 = ['a', 'b', 'c', 'd', 'e']

console.log(array1.copyWithin(0, 3, 4))

console.log(array1.copyWithin(1, 3))
```

指定目标环境browserslist配置
因为[Array.prototype.copyWithin()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)在Chrome 45版本才支持。我们设置成90，查看结果
```
chrome 90
```

运行`npm run build`
```bash
npm run build                                                                              
```
chrome 90 编译结果：
```bash
"use strict";

require("core-js/modules/web.timers.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.dom.iterable.js");

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(1, 3));
```
Babel针对Chrome 90 不支持的API特性进行引用，一共引入了3个core-js的API补齐模块。同时也可以看到，因为Chrome 90已经支持Array.prototype.copyWithin()特性，所以没有引入相关的API补齐模块。

下面修改browserslist里chrome 40。运行`npm run build`

chrome 40编译结果：
```javascript
require("core-js/modules/es6.array.copy-within.js");
...
...

require("core-js/modules/es6.typed.int8-array.js");

require("core-js/modules/es6.typed.uint8-array.js");
....
...

require("regenerator-runtime/runtime.js");
```
> 由于引用太多，这里只显示了部分
可以看到`require("core-js/modules/es6.array.copy-within.js")`

思考：  
当`useBuiltIns`取值为`entry`的时候，由 Babel 根据 `browserslist` 配置的支持环境，自动按需加载该配置环境需要的`所有polyfills`。换句话说，此方案是根据目标环境需要什么就加载什么，而不考虑业务代码中是否使用到相关的特性或API。

针对这个问题,`@babel/preset-env` + `useBuiltins（usage)` + `browserslist` 方案就出现了，注意这里的 `useBuiltins` 配置为 `usage`，它可以真正根据代码情况，分析 AST（抽象语法树）进行更细粒度的按需引用。这是打补丁的第三种方式。下面具体看一下实例


### usage
[源码地址](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env03)  
Babel配置文件如下：
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

安装npm包
```bash
npm install --save-dev @babel/cli @babel/core  @babel/preset-env
npm install --save @babel/polyfill
```

指定目标环境browserslist配置
因为[Array.prototype.copyWithin()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)在Chrome 45版本才支持。我们设置成 40，这样可以动态引入 polyfill
```
chrome 40
```

编译前代码
```javascript
//这里不需要手动导入 @babel/polyfill
//新的语法
const array1 = ['a', 'b', 'c', 'd', 'e']

console.log(array1.copyWithin(0, 3, 4))

console.log(array1.copyWithin(1, 3))
```

编译后代码
```javascript
"use strict";

require("core-js/modules/es6.array.copy-within.js");
var array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(1, 3));
```
使用useBuiltIns:"usage"后，同样的目标环境，编译后的代码只引入了`require("core-js/modules/es6.array.copy-within.js");`。做到了ES6特性API在目标环境缺失的时候，Babel才会引入core-js的API补齐模块。

#### 总结 'entry'与'usage'两个参数值的区别
- `entry`方式 需要在项目入口手动添加`polyfill`,`usage`不需要
- `usage`方式 会根据代码内容按需加载`polyfill`,`entry`不可以

## corejs 
只有useBuiltIns设置为'usage'或'entry'时，才会生效。  
该参数项的取值可以是2或3，没有设置的时候默认是2,并且编译时候会有警告信息如下
```bash
> $ npm run build                                                                                                                                                    ⬡ 12.21.0 [±master ●●]

> tutor-preset_env02@1.0.0 build /Users/liujianwei/Documents/personal_code/tutor-babel/packages/tutor-preset_env02
> babel ./src/index.js --out-file ./dist/index.js


WARNING (@babel/preset-env): We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

More info about useBuiltIns: https://babeljs.io/docs/en/babel-preset-env#usebuiltins
More info about core-js: https://babeljs.io/docs/en/babel-preset-env#corejs
```

取默认值或2的时候，Babel编译的时候使用的是core-js@2版本（即core-js2.x.x）。因为某些新API只有core-js@3里才有，例如[Array.prototype.flat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)方法，我们需要使用core-js@3的API模块进行补齐，这个时候我们就把该项设置为3

corejs取值为2的时候，需要安装并引入core-js@2版本，或者直接安装@babel/polyfill也可以。如果corejs取值为3，必须安装并引入core-js@3版本才可以.

我们先看一下 `Array.prototype.flat()` 通过 core-js@2版本打补丁的例子  
[源码地址](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env04)  

 安装npm包
```bash
npm i -D @babel/cli @babel/core  @babel/preset-env  
npm i @babel/polyfill
```

目标环境 因为`Array.prototype.flat()`在chrome 69支持，所以目标环境设置成chrome 68
```json
chrome 68
```

babel配置
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        // "corejs": 2,//默认值为2
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

编译前代码：
```javascript
const arr1 = [0, 1, 2, [3, 4]]

console.log(arr1.flat())
```

编译后代码：
```javascript
"use strict";
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
```
可以看到 并没有添加flat的polyfill是因为core-js@2版本中没有对应的polyfill。

接下来，我们把 .babelrc里面的配置修改一下：
[源代码仓库tutor-preset_env05](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env05)
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3, //指定3版本
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```
安装 npm包
```bash
npm i -D @babel/cli @babel/core  @babel/preset-env  
npm i @babel/polyfill
# 指定core-js@3
npm install --save core-js@3
```

编译结果：
```javascript
"use strict";

require("core-js/modules/es.array.flat.js");

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

```
可以对比一下，这时候 `require("core-js/modules/es.array.flat.js");` 被引入了。

***
***
***


到这里，大家可能很疑惑。为什么`@babel/polyfill`已经废弃了，为什么这里还在使用?  其实，已经上文提到了 `@babel/polyfill` 融合了 `core-js` 和 `regenerator-runtime`。
既然如此，我们也可以不使用`@babel/polyfill`，而直接使用 `core-js@3`。一言不合就上代码：


[源代码仓库tutor-preset_env06](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-preset_env06)

安装npm包
```bash
npm install --save-dev @babel/cli @babel/core  @babel/preset-env  
npm install --save core-js@3  
```
> 没有显示的安装`regenerator-runtime` 是因为在安装`@babel/preset-env`的时候，`regenerator-runtime`作为依赖已经被安装过了

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3, //指定3版本
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```
安装 npm包
```bash
npm i -D @babel/cli @babel/core  @babel/preset-env  
npm i @babel/polyfill
# 指定core-js@3
npm install --save core-js@3
```

编译结果：
```javascript
"use strict";

require("core-js/modules/es.array.flat.js");

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

```
直接使用`core-js@3`的结果，同`@babel/polyfill`+`core-js@3`是同样的效果。


***
***
***
## modules
`"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto"`默认值是`auto`。该项用来设置是否把ES6的模块化语法改成其它模块化语法。

我们常见的模块化语法有两种：
- ES6的模块法语法---import与export
- commonjs模块化语法---require与module.exports
前几个例子中，没有设置`modules`,代码编译之后，`import`被替换成了`require`。

如果将参数项改成false，那么就不会对ES6模块化进行更改，还是使用import引入模块。  
[源代码地址tutor-preset_env07](https://github.com/rupid/tutor-babel/tree/main/packages/tutor-preset_env07)  
babel配置如下
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "corejs": 3, //指定3版本
        "useBuiltIns": "usage",
        "modules":false
      }
    ]
  ]
}
```
安装 npm
```bash
 npm i @babel/core @babel/cli @babel/preset-env
 npm i core-js@3 
```
编译后的结果：
```javascript
import "core-js/modules/es.array.flat.js";
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
```
使用ES6模块化语法有什么好处?  

在使用Webpack一类的打包工具，可以进行静态分析，从而可以做[Tree-Shaking](https://www.webpackjs.com/guides/tree-shaking/) 等优化措施

以上的内容 配置的Babel足以解决业务类型的项目了。 如果你想 发布一个npm包给别人用，还需要了解下一个小节讲解的 `@babel/runtime`和`@babel/plugin-transform-runtime`
