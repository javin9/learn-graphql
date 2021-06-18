/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/graphql-client/src/apollo-provider.js
 * @Author: liujianwei1
 * @Date: 2021-06-18 11:33:06
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
import VueApollo from 'vue-apollo'
import {
  // 创建 apollo-clinet 实例
  ApolloClient,
  // 创建缓存
  InMemoryCache,
  HttpLink
} from "apollo-boost"

// 创建client
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4004',
  }),
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  clients: {
    task: client
  },
  defaultClient: client
})

export { apolloProvider }
