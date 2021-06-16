<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/babel-polyfill.md
 * @Author: liujianwei1
 * @Date: 2021-05-15 14:00:47
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->

[官网传送门](https://babeljs.io/docs/en/babel-polyfill)
> 已经在 `Babel@7.4.*`废弃了。`@babel/preset-env`会提到

@babel/polyfill是`core-js`和`regenerator-runtime`两个npm包的集合。

core-js最新的版本是3.x.x 。`@babel/polyfill`依赖的core-js是2.x.x版本，core-js@2版本缺少了一些功能。比如Array.prorotype.includes。所以，从Babel@7.4.x就不在推荐使用@babel/polyfill了。

但我们仍然把传统@babel/polyfill的使用方式在本节进行讲解，这对于理解其使用方式是非常有帮助的

接下来看一下如何使用：
#### 方法1：直接在html文件中引入Babel的polyfill.js文件
[源代码地址tutor-polyfill01](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-polyfill01)
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script src="./lib/polyfill.js"></script>
  <script src="./index.js"></script>
</body>

</html>
```

#### 方法2：项目构建入口引入polyfill.js
[源码地址tutor-polyfill02](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-polyfill02)

主要代码部分
```js
import "./polyfill"

var promise = Promise.resolve('hello babel')
console.log(promise)
```

安装webpack，webpack-cli
```bash
  npm install webpack webpack-cli -D
```

在package.json里面，添加运行脚本。并运行`npm run build`
```bash
"scripts": {
    "build": "webpack  --entry ./src/index.js  --mode development  --output-path ./dist/"
}
```
html部分
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script src="./dist/main.js"></script>
</body>

</html>
```

#### 方法3：项目构建入口引入@babel/polyfill
[源码地址tutor-polyfill03](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-polyfill03)

安装@babel/polyfill
```bash
npm i @babel/polyfill
```

主要代码部分
```js
import "@babel/polyfill"

var promise = Promise.resolve('hello babel')
console.log(promise)
```

安装webpack，webpack-cli
```bash
  npm install webpack webpack-cli -D
```

在package.json里面，添加运行脚本。并运行`npm run build`
```bash
"scripts": {
    "build": "webpack  --entry ./src/index.js  --mode development  --output-path ./dist/"
}
```
html部分
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script src="./dist/main.js"></script>
</body>

</html>
```


#### 方法4：项目构建入口引入core-js/stable与regenerator-runtime/runtime
[源码地址tutor-polyfill04](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-polyfill04)

该方法需要我们单独安装单独安装`core-js@3`与`regenerator-runtime`这两个npm包，这种方式core-js是默认是3.x.x版本。
```bash
 npm install --save core-js@3 regenerator-runtime
 # + regenerator-runtime@0.13.7
 # + core-js@3.12.1
```
这种方式不需要安装@babel/polyfill，因为安装`@babel/polyfill`的时，也会自动把`core-js`与`regenerator-runtime`安装上，而`@babel/polyfill`使用的core-js已经锁死为2.x.x版本了。core-js的2.x.x版本里并没有stable文件目录，所以安装@babel/polyfill后再引入core-js/stable会报错。

如果遇到`Cannot find module 'core-js@3/library/fn/**'.`这种类型的错误，要检查一下core-js版本号

其实这个方法和上面的例子也是非常像，就是把一个npm包换成了两个而已。不一样的地方具体如下
主要代码部分
```js
import "core-js/stable";
import "regenerator-runtime/runtime";

var promise = Promise.resolve('hello babel')
console.log(promise)
```

安装webpack，webpack-cli
```bash
  npm install webpack webpack-cli -D
```

在package.json里面，添加运行脚本。并运行`npm run build`
```bash
"scripts": {
    "build": "webpack  --entry ./src/index.js  --mode development  --output-path ./dist/"
}
```
html部分
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script src="./dist/main.js"></script>
</body>

</html>
```

#### 方法5：前端工程构建工具的配置文件入口里引入

[源码地址tutor-polyfill05](https://github.com/rupid/tutor-babel/tree/master/packages/tutor-polyfill05)  

这种方法对应三种不同的入口文件，这里为了节省篇幅，只拿@babel/polyfill方式做演示

```js
const path = require('path')
module.exports = {
  // entry: ['./src/polyfill.js', './src/index.js'],  第一种：直接引入源文件
  entry: ['@babel/polyfill', './src/index.js'], //第二种：@babel/polyfill
  // entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'], //第三种
  output: {
    filename: "./dist/main.js",
    path: path.resolve(__dirname, '')
  }
}
```

在package.json里面，添加运行脚本。并运行`npm run build`
```bash
"scripts": {
    "build": "webpack"
}
```

### 总结：
以上在前端工程入口文件或构建工具的配置文件里使用polyfill（或是其子包）的方式都属于`手动打补丁`方式，这种方式把整个npm包或polyfill.js塞到了项目中，由于polyfill文件非常大，所以会影响页面首屏时间。真实的项目中一般不会采用此方式，不过可以部分引入。

下一节我们会讲@babel/preset-env，这种打补丁的方式属于 按需编译和按需打补丁
