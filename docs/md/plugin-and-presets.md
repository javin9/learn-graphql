<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/plugin-and-presets.md
 * @Author: liujianwei1
 * @Date: 2021-05-16 12:37:08
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
- [插件-传送门](https://babeljs.io/docs/en/plugins)
- [预设-传送门](https://babeljs.io/docs/en/presets)

Babel官方的插件和预设的数量非常多，不过常用的插件和预只有几个，接下来重点讲解这几个插件和预，其他的可以举一反三，触类旁通

## 插件(Plugin)
在转换的过程中，Babel插件对抽象语法书(AST)进行增删改，如果不给Babel装上插件，抽象语法树将会不变，代码就会原样输出。正是因为有插件的存在， Babel才能对抽象语法书(AST)进行增删改，继而产生目标源代码。

#### 插件分类
Babel插件大致分为以下两种：
- 语法插件（syntax plugin）——作用于 `@babel/parser`，解析特定类型的语法，将代码解析为抽象语法树（AST）。`jsx`，`flow`
- 转换插件（transform plugin）—— 负责对抽象语法树进行增删改

语法插件虽名为插件，但其本身并不具有功能性。语法插件所对应的语法功能其实都已在`@babel/parser`里实现，插件的作用只是将对应语法的解析功能打开。

转换插件会自动启用相应的语法插件。因此，如果已经使用了相应的转换插件，则无需指定语法插件。

所以下文提及的 Babel 插件将专指转换插件

Babel@7官方有90多个插件，不过大半已经整合在`@babel/preset-env`、`@babel/preset-react`、`@babel/preset-typescript`等预设里了，一般情况下，我们在开发的时候直接使用预设就可以了。


## 预设(Presets)
插件(plugin)只是对单个功能进行转换，当配置的插件比较多的时候，就可以封装成预设(Presets)，来简化插件(Plugins)的使用的，预设即一组预先设定的插件。

目前官方推荐的preset，有下面四个：
- `@babel/preset-env` 所有项目都会用到的
- `@babel/preset-react` react框架需要的
- `@babel/preset-flow` flow需要的。Flow 是一个静态类型检测工具，进行类型检查，类似于ts
- `@babel/preset-typescript` typescript需要的  


其它的preset，如在Babel@6的时代，常见的babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest、babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2 等这些从Babel@7开始已经`不推荐使用了`

### 插件顺序
如果两个转换器都访问同一个“ Program ”节点，则转换器会按照以下顺序运行
- 插件在 Presets 前运行。
- 插件可以指定从头到尾的顺序(数组坐标0权重最大)。
- Preset 顺序是相反的 (从后到前).

例如：
```json
{
  "plugins": [
    "transform-decorators-legacy",
    "transform-class-properties"
  ]
}
```
将会运行 transform-decorators-legacy 然后是 transform-class-properties

关于 presets 一定要记住，顺序是相反的。如下：
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
按以下顺序运行：@babel/preset-react 再运行 @babel/preset-env。

2.接下来我们会学习`@babel/polyfill`、`@babel/preset-env`、`@babel/plugin-transform-runtime`与等内容。

