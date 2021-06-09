/*
 * @Desc: Scalar Types
 * @FilePath: /learn-graphql/packages/gql_basic/src/index_02.js
 * @Author: liujianwei1
 * @Date: 2021-06-03 17:35:31
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
import { GraphQLServer } from 'graphql-yoga'

// 类型定义
// 标量类型（Scalar Types） String,Int,Float,Boolean,ID
const typeDefs = `
  type Query {
    id:ID!
    name:String!
    age:Int
    english:Float!
    inClass:Boolean
  }
`
// 具体实现
// 每个字段定义一个函数，填写具体的实现
const resolvers = {
  Query: {
    /**
     * 返回值可以是数字，也可以是字符串。及时是数组，都会转成字符串
     */
    id () {
      return 302132341244
    },
    name () {
      return "太凉"
    },
    age () {
      return 18
    },
    english () {
      return 99.99
    },
    /**
     * 没有添加！是可以返回null 
     */
    inClass () {
      return null
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
