/*
 * @Desc:自定义类型
 * @FilePath: /learn-graphql/packages/gql_basic/src/index_03.js
 * @Author: liujianwei1
 * @Date: 2021-06-04 21:00:52
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import { GraphQLServer } from 'graphql-yoga'


// 类型定义
// 自定义User类型 规范-首字符大写
const typeDefs = `
  type Query{
    userInfo:User!
  }
  type User {
    id:ID!
    name:String!
    age:Int!
    english:Float
    inClass:Boolean
  }
`
// 具体实现
// 每个字段定义一个函数，填写具体的实现
const resolvers = {
  Query: {
    userInfo () {
      return {
        id: '1384848',
        name: '太凉2',
        age: 18,
        english: 89.9,
        inClass: true
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))