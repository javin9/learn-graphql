/*
 * @Desc:操作参数
 * @FilePath: /learn-graphql/packages/gql_basic/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-06-04 21:17:23
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */


import { GraphQLServer } from 'graphql-yoga'


// 类型定义
// 自定义User类型 规范-首字符大写
const typeDefs = `
  type Query{
    userInfo:User!
    greeting(name:String):String!
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
    /**
     * 
     * @param {*} parent 
     * @param {*} args  我们传入的参数 都在args里面
     * @param {*} ctx 
     * @param {*} info 
     * @returns 
     */
    greeting (parent, args, ctx, info) {
      console.log(args)
      const name = args.name || 'nobody'
      return `greeting ${name}`
    },
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