/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/resolvers/permission.js
 * @Author: liujianwei1
 * @Date: 2021-07-12 21:50:36
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

export default {
  system (parent, args, { db }) {
    return db.systemList.filter((item) => item._id === parent.system)
  }
}