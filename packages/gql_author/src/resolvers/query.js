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
    return true
  },
  /**
   * 系统列表
   */
  getSystemList (parent, args, { db }) {
    //TODO:
    return []
  },
  /**
   * 根据ID查询系统详情
   * @param {*} id 
   */
  getSystemByID (parent, args, { db }) {
    //TODO:
    return {}
  },
  /**
   * 根据工号或邮箱查询指定用户信息
   * @param {*} params 
   * @returns [User]
   */
  getUserList (parent, args, { db }) {
    //TODO:
    return []
  },
  /**
   * 根据系统ID查询角色列表
   * @param {*} id 
   * @returns [Role]
   */
  getRoleListBySystemID (parent, args, { db }) {
    //TODO:
    return []
  }
}