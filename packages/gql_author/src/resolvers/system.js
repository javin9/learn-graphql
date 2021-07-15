/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/resolvers/system.js
 * @Author: liujianwei1
 * @Date: 2021-07-12 21:52:38
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

export default {
  roles (parent, args, { db }) {
    // TODO：
    return parent.roles.map((roleID) => {
      return db.roleList.find((item) => item._id == roleID)
    })
  },
  permissions (parent, args, { db }) {
    return parent.permissions.map((pid) => {
      return db.permissionList.find((item) => item._id == pid)
    })
  }
}