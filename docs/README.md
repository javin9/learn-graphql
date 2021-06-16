<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/README.md
 * @Author: liujianwei1
 * @Date: 2021-05-14 11:15:59
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->

Babel 在前端中占有举足轻重的地位，几乎所有的前端应用项目都离不开Babel的支持。

作为前端工具的开发者或项目的主要管理者，配置Babel是必不可少的。  

我们先了解一下Babel的版本。

目前有Babel@6和Babel@7两个版本

Babel@7 采用scope的命名规则,把相关模块组织到了一起，表现上为`@babel/core`,`@babel/cli`。而Babel@6采用的是name的命名规则，表现为`babel-core`,`babel-cli`

因为Babel@7使用最广泛，接下来我们提到的Babel 相关API，都是7版本



### 分享目标
通过本次分享，会让大家对如何配置Babel有个深入的认识，并且可以独立配置Babel。  

> 本文主要参考了[Babel官方文档](https://babeljs.io/docs/en/)，结合自身实战经验一气呵成，如果有错误，欢迎指正