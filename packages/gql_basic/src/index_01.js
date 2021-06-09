/*
 * @Desc: GraphQL服务器 
 * @FilePath: /learn-graphql/packages/gql_basic/src/index_01.js
 * @Author: liujianwei1
 * @Date: 2021-06-03 17:35:31
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
import { GraphQLServer } from 'graphql-yoga'

// 类型定义
const typeDefs = `
  type Query {
    name:String!
    age:String!
  }
`
// 具体实现
// 每个字段定义一个函数，填写具体的实现
const resolvers = {
  Query: {
    name () {
      return "太凉"
    },
    age () {
      return 18
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
