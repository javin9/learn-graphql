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
  // 将 js中graphql字符串转化成查询文档
  gql
} from "@apollo/client"

// 创建client
const client = new ApolloClient({
  uri: 'http://localhost:4004',
  cache: new InMemoryCache()
})

// 通过gql函数将 graphql查询字符串解析成查询文档
const queryString = gql`
query{
  getUserList{
    name
    age
    email
  }
}
`

client
  .query({
    query: queryString
  })
  .then(result => {
    console.log(result)

    const list = result.data.getUserList
    const frag = document.createDocumentFragment()
    for (const { id, name, email } of list) {
      const liEl = document.createElement("li")
      liEl.innerHTML = `${id} ${name} ${email}`
      frag.appendChild(liEl)
    }
    document.querySelector('#list').appendChild(frag)
  })