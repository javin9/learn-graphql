<!--
 * @Desc: 
 * @FilePath: /learn-graphql/README.md
 * @Author: liujianwei1
 * @Date: 2021-06-03 17:39:09
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
```bash
yarn add @babel/cli @babel/core @babel/preset-env   
```
### graphql服务器

graphql-yoga  https://github.com/dotansimha/graphql-yoga

### scalar type
scalar type

/learn-graphql/packages/gql_basic/src/index_02.js

String,Int,Float,Boolean,ID

```bash
query{
  id
  name
  age
  english
  inClass
}
```

### 自定义类型

/learn-graphql/packages/gql_basic/src/index_03.js

```bash
//userInfo需要明确指出返回哪些字段
query{
  userInfo{
    id
    name
    age
  }
}
```


### 操作参数
/learn-graphql/packages/gql_basic/src/index_04.js

```bash
query{
  userInfo{
    id
    name
    age
  }
  greeting
}
```

```bash
query{
  userInfo{
    id
    name
    age
  }
  greeting(name:"太凉")
}
```
| 你好 | 哈哈是打发斯蒂芬 |
| ---- | ---------------- |
| 你好 | 哈哈是打发斯蒂芬 |
| 你好 | 哈哈是打发斯蒂芬 |

### 数组
/learn-graphql/packages/gql_basic/src/index_05.js
```bash
query{
  scores
  userInfo{
    id
    name
    age
  }
  greeting(name:"太凉")
}

query{
  scores
  userInfo{
    id
    name
    age
  }
  greeting(name:"太凉")
  sum(inputs:[1,3,4,5,6])
  userList{
    id
    name
  }
}

query{
  scores
  userInfo{
    id
    name
    age
  }
  greeting(name:"太凉")
  sum(inputs:[1,3,4,5,6])
  userList(id:1){
    id
    name
  }
}
```

### 关系数据
通过post获取到user
/learn-graphql/packages/gql_basic/src/index_06.js
/learn-graphql/packages/gql_basic/src/index_07.js
/learn-graphql/packages/gql_basic/src/index_08.js

```bash
query{
  posts{
    id
    title
    content
    isPublish
    author{
      id
      name
    }
  }
}
```

### Mutation
<!-- 09 -->
查询使用query,修改数据使用Mutation
Mutation的类型 前面用input  
输入类型：input

```bash
mutation{
  createUser(name:"cupid",email:"liujainwe@tal.com",age:18){
    name
    age
  }
}
```

### Input类型
<!-- 10 -->
```bash
mutation{
  createUser(
    params:{
    name:"fff",
    email:"sdfsad@com.dfs",
    age:18}
  ){
    name
  }
}
```

- [GraphQL，Apollo Client，PostgreSQL三者的关系和区别，以及在项目中的角色](https://blog.csdn.net/sun_DongLiang/article/details/86985560)