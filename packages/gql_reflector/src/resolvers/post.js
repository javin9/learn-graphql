/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_reflector/src/resolvers/Post.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:12:50
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
export default {
  author (parent, args, { db }) {
    return db.userList.find((item) => item.id == parent.author)
  },
  comments (parent, args, { db }) {
    return parent.comments.map((commentId) => {
      return db.commentList.find((item) => item.id == commentId)
    })
  }
}
