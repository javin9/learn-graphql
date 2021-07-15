/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/resolvers/query.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:10:24
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

export default {
  /**
   * 登录
   * @returns  Boolean
   */
  login (parent, args, { db }) {
    //TODO:
    console.log(JSON.stringify(args))
    return db.userList[0]
  },
  /**
   * 系统列表
   */
  getSystemList (parent, args, { db }) {
    return db.systemList
  },
  /**
   * 根据ID查询系统详情
   * @param {*} _id 
   */
  getSystemByID (parent, args, { db }) {
    console.log(JSON.stringify(args))
    return db.systemList.find((item) => item._id === args._id)
  },
  getUserByID (parent, args, { db }) {
    return {}
  },
  /**
   * 根据工号或邮箱查询指定用户信息
   * @param {*} params 
   * @returns [User]
   */
  getUserList (parent, args, { db }) {
    return db.userList
  },
  getRoleByID (parent, args, { db }) {
    console.log(JSON.stringify(args))
    return db.roleList.find((item) => item._id === args._id)
  }
}