/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_reflector/src/resolvers/Comment.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:13:43
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
export default {
  author (parent, args, { db }) {
    return db.userList.filter((item) => item.id === parent.author)
  },
  post (parent, args, { db }) {
    return db.postList.filter((item) => item.id === parent.post)
  }
}