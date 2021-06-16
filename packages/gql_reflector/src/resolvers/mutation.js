/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_reflector/src/resolvers/Mutation.js
 * @Author: liujianwei1
 * @Date: 2021-06-10 14:10:11
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import { v4 as uuid } from 'uuid'
export default {
  createUser (parent, args, { db }, info) {
    const isExist = db.userList.some((item) => item.email === args.params.email)
    if (isExist) {
      throw new Error('邮箱已被占用')
    }
    const newUser = {
      id: uuid(),
      ...args.params
    }
    db.userList.push(newUser)
    return newUser
  }
}