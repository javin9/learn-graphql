/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_basic/src/index_05.js
 * @Author: liujianwei1
 * @Date: 2021-06-07 10:57:11
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */



import { GraphQLServer } from 'graphql-yoga'


// 类型定义
// 自定义User类型 规范-首字符大写
const typeDefs = `
  type Query{
    scores:[Int!]!
    userInfo:User!
    greeting(name:String):String!
    sum(inputs:[Int!]):Int
    userList(id:Int):[User!]
    posts:[Post!]
  }
  type User {
    id:ID!
    name:String!
    age:Int!
    english:Float
    inClass:Boolean
  }
  
  type Post {
    id:ID!
    title:String! 
    content:String! 
    isPublish:Boolean
  }
  `

const posts = (() => {
  let arr = []
  for (let index = 0; index < 6; index++) {
    arr.push(
      {
        id: Date.now(),
        title: `title=tiele${index}_title`,
        content: "app crashed - waiting for file changes before starting...app crashed - waiting for file changes before starting...app crashed - waiting for file changes before starting...app crashed - waiting for file changes before starting...",
        isPublish: 90.1
      }
    )
  }
  return arr
})()

const list = (() => {
  let arr = []
  for (let index = 0; index < 6; index++) {
    arr.push(
      {
        id: index,
        name: `name=${index}`,
        age: index * 2,
        english: 90.1,
        inClass: true
      }
    )
  }
  return arr
})()

// 具体实现
// 每个字段定义一个函数，填写具体的实现
const resolvers = {
  Query: {
    posts () {
      return [...posts]
    },
    userList (parent, args, ctx, info) {
      const { id } = args
      let arr = [...list]
      //过滤
      if (id) {
        return arr.filter((item) => item.id === id)
      }
      return arr
    },
    sum (parent, args, ctx, info) {
      return args.inputs.reduce((a, b) => {
        console.log(typeof a)
        return a + b
      }, 0)
    },
    scores () {
      return [1, 3, 3, 4]
    },
    /**
     * 
     * @param {*} parent 
     * @param {*} args  我们传入的参数 都在args里面
     * @param {*} ctx 
     * @param {*} info 
     * @returns 
     */
    greeting (parent, args, ctx, info) {
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