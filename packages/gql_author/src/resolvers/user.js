/*
 * @Desc: 
 * @FilePath: /learn-graphql/packages/gql_author/src/resolvers/user.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:12:24
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */

export default {
  roles (parent, args, { db }) {
    // TODO：
    return parent.roles.map((roleID) => {
      return db.roleList.find((item) => item.id == roleID)
    })
  },
  permissions (parent, args, { db }) {
    // TODO：
    return parent.permissions.map((pid) => {
      return db.permissionList.find((item) => item.id == pid)
    })
  }
}