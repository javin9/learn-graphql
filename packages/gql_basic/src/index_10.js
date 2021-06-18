
/*
 * @Desc:commonet
 * @FilePath: /learn-graphql/packages/gql_basic/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-06-07 10:57:11
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */



import { GraphQLServer } from 'graphql-yoga'
import { v4 as uuid } from 'uuid'


// 类型定义
// 自定义User类型 规范-首字符大写

const typeDefs = `
 type Mutation{
   createUser(params:CreateUserInput):User
   createPost(title:String!,content:String!,authorID:String):Post
 }
 input CreateUserInput{
  name:String!
  email:String!
  age:Int
 }

 
  type Query{
    scores:[Int!]!
    userInfo:User!
    greeting(name:String):String!
    sum(inputs:[Int!]):Int
    userList(id:Int):[User!]
    posts:[Post!]
    comments:[Comment!]
  }
  type User {
    id:ID!
    name:String!
    age:Int!
    email:String,
    english:Float
    inClass:Boolean
    posts:[Post]
  }
  
  type Post {
    id:ID!
    title:String! 
    content:String! 
    isPublish:Boolean
    author:User
    comments:[Comment]
  }

  type Comment{
    id:ID! 
    content:String!
  }
  `

const posts = (() => {
  let arr = []
  for (let index = 0; index < 6; index++) {
    arr.push(
      {
        id: index,
        title: `title=tiele${index}_title`,
        content: "app crashed - waiting for...",
        isPublish: 90.1,
        author: String(index),
        comments: index % 2 === 1 ? ['0', '1'] : ['2', '3']
      }
    )
  }
  return arr
})()

const users = (() => {
  let arr = []
  for (let index = 0; index < 6; index++) {
    arr.push(
      {
        id: index,
        name: `name=${index}`,
        emial: '',
        age: index * 2,
        english: 90.1,
        inClass: true,
        posts: index % 2 === 1 ? ['0', '1'] : ['2', '3']
      }
    )
  }
  return arr
})()

const comments = [
  {
    id: "0",
    content: "评论内容"
  },
  {
    id: "1",
    content: "评论内容"
  },
  {
    id: "2",
    content: "评论内容"
  },
  {
    id: "3",
    content: "评论内容"
  }
]

// 具体实现
// 每个字段定义一个函数，填写具体的实现
const resolvers = {
  Mutation: {
    createUser (parent, args, ctx, info) {
      console.log(args)
      const { name, email, age } = args.params
      const isExist = users.some((item) => item.email === email)
      console.log(isExist)
      if (isExist) {
        throw new Error('邮箱已被占用')
      }

      const newUser = {
        id: uuid(),
        ...args.params
      }
      users.push(newUser)
      console.log(newUser)
      return newUser
    },
    createPost (parent, args) {
      // title: String!, content: String!, authorID
      // const user = users.find((item) => item.id === authorID)
      const { title, content, authorID } = args
      console.log(args)
      const newPost = {
        id: uuid(),
        title,
        content,
        author: authorID
      }
      console.log(newPost)
      posts.push(newPost)
      return newPost
    }
  },
  Query: {
    comments () {
      return [...comments]
    },
    posts () {
      return [...posts]
    },
    userList (parent, args, ctx, info) {
      const { id } = args
      let arr = [...users]
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
  },
  /**
   * 首先查询post的时候，会去resolve函数里面查找query先得post定义。当找到author的时候，值是1和user不匹配，所以需要手动告诉实现函数如何解析author
   */
  Post: {
    author (parent, args) {
      return list.find((item) => item.id == parent.author)
    },
    comments (parent, args) {
      return parent.comments.map((id) => {
        return comments.find((b) => id == b.id)
      })
    }
  },
  User: {
    posts (parent, args) {
      return parent.posts.map((id) => {
        return posts.find((item) => item.id == id)
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))