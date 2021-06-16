/*
 * @Desc: 
 * @FilePath: /learn-graphql/packages/gql_reflector/src/resolvers/User.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:12:24
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */

export default {
  posts (parent, args, { db }) {
    return parent.posts.map((postId) => {
      return db.postList.find((item) => item.id == postId)
    })
  },
  comments (parent, args, { db }) {
    return parent.posts.map((commentId) => {
      return db.commentList.find((item) => item.id == commentId)
    })
  }
}