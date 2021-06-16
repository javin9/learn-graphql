
从配置文件内容方面区分，Babel提供了两种配置内容。一种是由js 编写，通过module.exports={}方式输出对象。例如Vue的Babel配置文件内容
```javascript
const babelPresetFlowVue = {
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    // require('@babel/plugin-syntax-flow'), // not needed, included in transform-flow-strip-types
    require('@babel/plugin-transform-flow-strip-types')
  ]
}

module.exports = {
  presets: [
    require('@babel/preset-env'),
    // require('babel-preset-flow-vue')
    babelPresetFlowVue
  ],
  plugins: [
    require('babel-plugin-transform-vue-jsx'),
    require('@babel/plugin-syntax-dynamic-import')
  ],
  ignore: [
    'dist/*.js',
    'packages/**/*.js'
  ]
}
```
这种有js编写的文件后缀都是`.js`。比如`babel.config.js`、`.babelrc.js`。

另外一种是直接书写 json内容 。例如 Element-UI的配置文件
```json
{
  "presets": [],//省略了内容
  "plugins": ["transform-vue-jsx"]
}
```
此时文件后缀一般为.json或者没有 例如：`babel.config.json`、`.babelrc`

两种类型的文件，一般都会放到`项目根目录下面`或者同`package.json`同目录。如果是一个由Lerna 管理的Monorepo类型的项目，这两种方式会有一些区别。如下

### 配置文件类型：
Babel 有两种并行的配置文件方式：
- 项目范围的配置(Project-wide)
- 文件相关的配置(File-relative)
  - `.babelrc`（和 `.babelrc.js`）文件
  - 带有 "babel" 键的 package.json 文件

| Version      | Changes |
| --- | --- |
| `v7.8.0`     | 支持 `.babelrc.mjs` , `babel.config.mjs`       |
| `v7.7.0`  | 支持 `.babelrc`,`.babelrc.json`, `.babelrc.cjs`, `babel.config.json`, `babel.config.cjs`|

### 项目范围的配置
Babel 7.x 中的新功能，Babel 具有 "root" 目录的概念，"root"目录默认为`当前的工作目录`。编译时，`Babel`将自动搜索相对于此根目录下的`babel.config.js`文件，或其Babel认可的文件，比如：`babel.config.json`,`babel.config.cjs`,`babel.config.mjs`等

##### 优点
它们是非常合适并值得广泛应用的配置，它甚至允许`plugins` 和 `presets` 可以轻松应用于`node_modules`或符号链接包中的文件  

##### 缺点
因为它依赖于工作目录,如果一个项目属于[Monorepo](https://zhuanlan.zhihu.com/p/77577415)类型项目，当工作目录不是的根目录(root)，编译时就找不到配置文件，如此一来在`Monorepo`中使用会比较痛苦。

```bash
babel.config.js
package.json
packages/
  mod1/
    package.json
    src/index.js
  mod2/
    package.json
    src/index.js
```
各个子模块构建的时候，用户将需要通过`rootMode`手动设置它的路径，以此来加载`babel.config.js`文件

##### CLI
```bash
babel --root-mode upward src -d lib
```

##### Webpack
```bash
module: {
  rules: [
    {
      loader: "babel-loader",
      options: {
        rootMode: "upward",
      },
    },
  ];
}
```
详细内容可以参考[官方文档的演示](https://babeljs.io/docs/en/config-files#monorepos)

### 文件相关配置
编译时，Babel 从 正在被编译的 文件 所在的 目录开始 去搜索 `.babelrc.json`或其他Babel认可的配置文件。比如：`babelrc`,`.babelrc.js`,`/package.json＃babel`。 有了这个功能，就可以为 package的子模块 创建独立的配置。
同时，`文件相关配置`和`项目相关配置`可以共同使用。下面是官方的解释：
>  File-relative configurations are also merged over top of project-wide config values, making them potentially useful for specific overrides, though that can also be accomplished through "overrides".  

通俗的翻译就是以下两点：
- 不同的配置：文件相关配置 和 项目相关配置 可以合并到一起
- 相同的配置：文件相关配置 会覆盖 项目相关配置
```bash
babel.config.js
package.json
packages/
  mod1/
    package.json
    src/index.js
    .babelrc
  mod2/
    package.json
    src/index.js
    .babelrc
```