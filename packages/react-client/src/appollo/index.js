/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/react-client/src/appollo/index.js
 * @Author: liujianwei1
 * @Date: 2021-07-23 16:27:18
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */


import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client"


export const client = new ApolloClient({
  uri: 'http://localhost:4004',
  cache: new InMemoryCache()
})

