<!--
 * @Desc: 
 * @FilePath: /tutor-babel/docs/md/polyfill.md
 * @Author: liujianwei1
 * @Date: 2021-05-17 14:52:28
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
`polyfill` 直译为 `垫片`、`补丁`、`腻子`，可以理解为兜底的东西，指的是对未能实现的宿主环境进行`兜底`操作，说白了就是打补丁。

总的来说，打补丁主要有三种方法：
- 手动打补丁
- 根据覆盖率自动打补丁
- 根据浏览器特性，按需打补丁

三种方式可以独立使用，也可以相互组合
### 例子：
```javascript
[1, 2, 3].fill(4);   // [4, 4, 4]
```
打补丁：
```javascript
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
```