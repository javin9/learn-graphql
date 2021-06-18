/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/apollo-client/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-06-17 16:31:10
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

document.querySelector("#app").innerHTML = (new Date).toLocaleTimeString()

import {
  // 创建 apollo-clinet 实例
  ApolloClient,
  // 创建缓存
  InMemoryCache,
  // 将 js中graphql字符串转化成查询文档,
  useQuery,
  gql
} from "@apollo/client"

// 创建client
const client = new ApolloClient({
  uri: 'http://localhost:4004',
  cache: new InMemoryCache()
})

// 通过gql函数将 graphql查询字符串解析成查询文档
const mutataionString = gql`
mutation($params:CreateUserInput){
  createUser(params:$params){
    name
    age
  }
}
`

client
  .mutate({
    mutation: mutataionString,
    variables: {
      params: {
        "name": "好未来",
        "age": 10,
        "email": "haodddmae@444tal.com"
      }
    }
  })
  .then(result => {
    console.log(result)
  })