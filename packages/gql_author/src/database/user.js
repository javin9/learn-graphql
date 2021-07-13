/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/database/user.js
 * @Author: liujianwei1
 * @Date: 2021-06-11 16:49:36
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

// type User{
//   id: ID!
//   # 工号
//   code:Int!
//   # 姓名
//   name: String!
//   # 邮箱
//   email:String!
//   # 密码
//   password: String!
//   # 用户角色 可以为空
//   roles:[Role]
//   # 用户权限 可以为空
//   permissions:[Permission]
//   # 拥有的系统权限
//   systems:[System]
// }
export default [
  {
    id: '2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a',
    code: 1000,
    name: "浪漫主义文学",
    email: 'pfowwdkldwstkj@21cn.com',
    password: '123123',
    roles: ["b8dfe26e-67c4-5b19-838a-99eefffb118a", "b3abf49f-2b10-4da2-995d-9e5ef4b0bc4c"],
    permissions: [],
    systems: []
  },
  {
    id: '4edb8f9d-32ff-6375-7152-cb1323828a97',
    code: 10001,
    name: "一个帽孒 ",
    email: 'oodhplslftwt@tom.com',
    roles: ["78b5391d-0a49-c2c0-d819-66b9bc97b027"],
    comments: []
  },
  {
    id: '67df0b21-52a5-1fce-c1ee-2e1008eab9e1',
    code: 10002,
    name: "mhj_1119",
    email: 'rup@265.com',
    posts: ["52850939-8a40-ab64-adf6-96c5cacf779a"],
    comments: []
  },
  {
    id: '6b0e0780-3852-3262-dfe5-0e6746c04852',
    code: 10003,
    name: "风欥麥浪",
    email: 'wsqkuoqlo@sina.com',
    posts: ["570ea36d-ff29-91e5-d588-e0adf2cf8582"],
    comments: []
  },
  {
    id: '005da55c-d598-ff8e-f65d-83c17031025a',
    code: 10004,
    name: "途途showtime",
    email: 'ojowng@etang.com',
    posts: [],
    comments: []
  }
]