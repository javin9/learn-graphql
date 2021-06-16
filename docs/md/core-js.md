<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/core-js.md
 * @Author: liujianwei1
 * @Date: 2021-05-26 11:29:43
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
或许你可能不知道[core-js](https://github.com/zloirock/core-js)，不过一定在项目中直接或间接地使用过它

core-js 是一个 JavaScript 标准库，它包含了 ECMAScript 2021 在内的多项特性的 polyfill，以及 ECMAScript 在 proposals 阶段的特性、WHATWG/W3C 新特性等。

core-js和 Babel有一些关联，掌握了core-js，能帮助你更好地理解 babel 生态。同时，通过对 core-js 的解析，可以更好的深入了解polyfill（垫片/补丁）

core-js目前最新的版本是core-js@3.x.x

core-js@2.x.x也有在用，官方不推荐继续使用，core-js@3.x.x有更丰富的polyfill，和Babel结合会有更好的未来。下面介绍的内容都是值得core-js@3的版本。

### core-js 仓库
core-js 是一个由 Lerna 搭建的 Monorepo 风格的项目(Monorepo 的核心观点是所有的项目在一个代码仓库中)，在它的 packages 文件夹中有五个包：
- core-js
- core-js-pure 
- core-js-bundle 
- core-js-compact :维护了按照browserslist规范的垫片需求数据，来帮助我们找到“符合目标环境”的 polyfills 需求集合
- core-js-builder :可以结合 core-js-compact 以及 core-js，并利用 webpack 能力，根据需求打包出 core-js 代码

core-js仓库提供了3个版本的core-js和2个工具包

下面具体介绍一下 core-js，core-js-pure，core-js-bundle区别。下面是官方文档给的例子：

```bash
// global version
npm install --save core-js@3.13.0
// version without global namespace pollution
npm install --save core-js-pure@3.13.0
// bundled global version
npm install --save core-js-bundle@3.13.0
```
### global version
翻译：全局版本。core-js中polyfill的代码会直接修改全局变量，污染全局变量。这么说可能有点模糊，我们看一个Promise的例子：

```javascript
import 'core-js/features/promise'
Promise.resolve(32).then(x => console.log(x));
```
`core-js/features/promise`是对浏览器的全局对象进行了重新赋值，重写了`Promise`及其原型链。

全局版本有两种使用方式:

第一种方式：只在项目入口文件中，手动引入`core-js`。例如：
```javascript
import 'core-js'; // <- at the top of your entry point

Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
[1, [2, 3], [4, [5]]].flat(2);                 // => [1, 2, 3, 4, 5]
Promise.resolve(32).then(x => console.log(x)); // => 32
```

第二种方式在入口文件手动按需引入需要的polyfill
```javascript
import 'core-js/features/array/from'; // <- at the top of your entry point
import 'core-js/features/array/flat'; // <- at the top of your entry point
import 'core-js/features/set';        // <- at the top of your entry point
import 'core-js/features/promise';    // <- at the top of your entry point

Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
[1, [2, 3], [4, [5]]].flat(2);                 // => [1, 2, 3, 4, 5]
Promise.resolve(32).then(x => console.log(x)); // => 32
```

### version without global namespace pollution
翻译：不污染全局变量的版本。 core-js-pure 提供了不污染全局变量的垫片能力，但是在使用的时候，不能一次性引入所有的polyfill，必须根据每个文件的需要，单独引入需要的modules。例如：
```javascript
import from from 'core-js-pure/features/array/from';
import flat from 'core-js-pure/features/array/flat';
import Set from 'core-js-pure/features/set';
import Promise from 'core-js-pure/features/promise';

from(new Set([1, 2, 3, 2, 1]));                // => [1, 2, 3]
flat([1, [2, 3], [4, [5]]], 2);                // => [1, 2, 3, 4, 5]
Promise.resolve(32).then(x => console.log(x)); // => 32
```
 类似`Array.from`,`Array.prototype`这种在内置对象或内置类上扩展出的新的实例方法或静态方法，都不能按照实例方法或静态方法直接调用，必须像`from(new Set([1, 2, 3, 2, 1]));`这种方式使用。

### bundled global version
翻译：打包好的全局版本。 core-js-bundle是已经编译打包好的版本，包含全部的polyfill，可以在浏览器里面通过`script`方式直接加载。


### CommonJS API
官方文档有一个下面的例子。列举了很多core-js使用polyfill的方式。
```javascript
// polyfill all `core-js` features:
import "core-js";
// polyfill only stable `core-js` features - ES and web standards:
import "core-js/stable";
// polyfill only stable ES features:
import "core-js/es";

// if you want to polyfill `Set`:
// all `Set`-related features, with ES proposals:
import "core-js/features/set";
// stable required for `Set` ES features and features from web standards
// (DOM collections iterator in this case):
import "core-js/stable/set";
// only stable ES features required for `Set`:
import "core-js/es/set";
// the same without global namespace pollution:
import Set from "core-js-pure/features/set";
import Set from "core-js-pure/stable/set";
import Set from "core-js-pure/es/set";

// if you want to polyfill just required methods:
import "core-js/features/set/intersection";
import "core-js/stable/queue-microtask";
import "core-js/es/array/from";

// polyfill reflect metadata proposal:
import "core-js/proposals/reflect-metadata";
// polyfill all stage 2+ proposals:
import "core-js/stage/2";
```

第一次看上面代码，一脸懵逼，`core-js/es`,`core-js/web`,`core-js/proposals`,`core-js/stable`,`core-js/features`,`core-js/stage`这些都是啥玩意?为什么还有等价关系？。  
![d](../_media/why.jpeg)

于是看了一下core-js文件夹结构，如下：  
> 由于文件目录太长，这里只列出1级目录结构 

```bash
tree -L 1
# 输出结果
├── LICENSE
├── README.md
├── configurator.js
├── es
├── features
├── index.js
├── internals
├── modules
├── package.json
├── postinstall.js
├── proposals
├── stable
├── stage
└── web
```
core-js的源码结构，展示了命名空间对应的文件夹。并且每个namespace下面都有一个`index.js`

`core-js/index.js` 等同于 `import 'core-js'`
`core-js/es` 等同于 `core-js/es`
.....
....


我们看一下 `core-js/index.js`的源码
```javascript
module.exports = require('./features');
```
`./features`文件夹下面的`index.js`
```javascript
//require('../modules/es.*
require('../modules/es.symbol');
require('../modules/es.symbol.description');
....
....
//require('../modules/esnext.*');
require('../modules/esnext.aggregate-error');
require('../modules/esnext.array.at');
....
....
//require('../modules/web.*');
require('../modules/web.dom-collections.for-each');
require('../modules/web.dom-collections.iterator');
....
....

module.exports = require('../internals/path');
```
通过查看源码，得知了 `import "core-js"`等价于
```javascript
import "core-js/es";
import "core-js/web";
import "core-js/proposals";
```
其它的等价关系，都可以从源码里看的一清二楚。

core-js的polyfill，底层的机制都是由`internals`和`modules`内部的module来完成的。core-js官方不推荐直接项目中直接使用这两个文件夹的module，因为它们是内部实现，很可能在版本迭代中发生变化


core-js-pure的源码与core-js仅仅只有internals和modules两个文件夹有区别，其它的都是一样的。打开上面的源码库看到core-js-pure里面只有一个overrides文件夹，包含了internals和modules两个文件夹。很容易就能猜到，core-js-pure这个包是在复制了core-js的包基础上，然后覆盖了internals和modules之后得到的。

### 与Babel配合使用
官方文档中列举了
- @babel/polyfill
- @babel/preset-env
- @babel/runtime

这里先不介绍一下，后续在 《如何Babel的配置文件，设计一个“最完美”的 Polyfill 方案》分享中具体描述。


