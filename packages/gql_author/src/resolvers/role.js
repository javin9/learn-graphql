/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/resolvers/role.js
 * @Author: liujianwei1
 * @Date: 2021-07-12 21:47:43
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
export default {
  system (parent, args, { db }) {
    // TODO：
    return db.systemList.filter((item) => item.id === parent.system)
  },
  permissions (parent, args, { db }) {
    // TODO：
    return parent.permissions.map((pid) => {
      return db.permissionList.find((item) => item.id == pid)
    })
  }
}