/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_reflector/src/resolvers/query.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:10:24
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

export default {
  getUserByID (parent, args, { db }) {
    const { id } = args
    if (!id) {
      throw new Error('lack param id is undefined')
    }
    return db.userList.filter((item) => item.id === id)
  },
  getPostByID (parent, args, { db }) {
    const { id } = args
    if (!id) {
      throw new Error('lack param id is undefined')
    }
    return db.postList.filter((item) => item.id === id)
  },
  getCommentByID (parent, args, { db }) {
    const { id } = args
    if (!id) {
      throw new Error('lack param id is undefined')
    }
    return db.commentList.filter((item) => item.id === id)
  },
  getUserList (parent, args, { db }) {
    return db.userList
  },
  getPostList (parent, args, { db }) {
    return db.postList
  },
  getCommentList (parent, args, { db }) {
    return db.commentList
  },
  getUserByInfo (parent, args, { db }) {
    console.log(JSON.stringify(args.params))
    return db.userList[0]
  }
}