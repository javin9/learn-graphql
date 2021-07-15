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
    return db.systemList.find((item) => item._id === parent.system)
  },
  permissions (parent, args, { db }) {
    return parent.permissions.map((pid) => {
      return db.permissionList.find((item) => item._id == pid)
    })
  },
  users (parent, args, { db }) {
    console.log(parent.users)
    return parent.users.map((userID) => {
      return db.userList.find((item) => item._id === userID)
    })
  }
}

// system:System!
//   users:[User]
//   permissions:[ Permission!]