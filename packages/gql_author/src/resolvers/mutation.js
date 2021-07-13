/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/resolvers/mutation.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:10:11
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import { v4 as uuid } from 'uuid'
export default {
  /**
   * 创建或者编辑权限信息
   * @param {SystemPermissionFormData} data 
   * @return Permission
   */
  createdOrUpdateSystemPermisson (parent, args, { db }, info) {
    //TODO:
    return {}
  },
  /**
   * 创建或编辑系统信息
   * @param {SystemFormData} data 
   * @return System
   */
  createdOrUpdateSystem (parent, args, { db }, info) {
    //TODO:
    return {}
  },
  /**
   *  创建或者编辑用户信息[注册逻辑]
   * @param {UserFormData} data 
   * @return User
   */
  createOrUpdateUser (parent, args, { db }, info) {
    //TODO:
    return {}
  },
  /**
   * 创建或编辑角色信息
   * @param {RoleFormData} data 
   */
  createOrUpdateRole (parent, args, { db }, info) {
    //TODO:
    return {}
  }
}