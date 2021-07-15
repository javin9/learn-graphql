/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/database/user.js
 * @Author: liujianwei1
 * @Date: 2021-06-11 16:49:36
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

// type User{
//   _id: ID!
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
// }
export default [
  {
    _id: '2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a',
    code: "1000",
    name: "浪漫主义文学",
    email: 'pfowwdkldwstkj@21cn.com',
    password: '123123',
    roles: ["3bdb4d34-bcc6-8bf4-6004-26f3971db47d", "52850939-8a40-ab64-adf6-96c5cacf779a", "b3abf49f-2b10-4da2-995d-9e5ef4b0bc4c", "e7be066c-1ffb-0352-44e7-b8c24bddfe0c"]
  },
  {
    _id: '4edb8f9d-32ff-6375-7152-cb1323828a97',
    code: "10001",
    name: "一个帽孒 ",
    email: 'oodhplslftwt@tom.com',
    password: '123123',
    roles: ["52850939-8a40-ab64-adf6-96c5cacf779a", "e7be066c-1ffb-0352-44e7-b8c24bddfe0c"]
  },
  {
    _id: '67df0b21-52a5-1fce-c1ee-2e1008eab9e1',
    code: "10002",
    name: "mhj_1119",
    email: 'rup@265.com',
    password: '123123',
    roles: ["5cabc08c-b241-68cf-572b-a84350b19d83", "4b35cd27-ff0d-c668-f372-baf19a2dc012", "b3abf49f-2b10-4da2-995d-9e5ef4b0bc4c"]
  },
  {
    _id: '6b0e0780-3852-3262-dfe5-0e6746c04852',
    code: "10003",
    name: "风欥麥浪",
    email: 'wsqkuoqlo@sina.com',
    password: '123123',
    roles: ["66d5c811-94ba-1059-459d-fc46f6713c1d", "bb2d9f4f-b811-796c-e1a3-71b2dd472c02",
      "4b35cd27-ff0d-c668-f372-baf19a2dc012", "b9ef820b-58fc-2935-e674-7824af92ad15"]
  },
  {
    _id: '005da55c-d598-ff8e-f65d-83c17031025a',
    code: "10004",
    name: "途途showtime",
    email: 'ojowng@etang.com',
    password: '123123',
    roles: ["5cabc08c-b241-68cf-572b-a84350b19d83", "52850939-8a40-ab64-adf6-96c5cacf779a", "b3abf49f-2b10-4da2-995d-9e5ef4b0bc4c", "3bdb4d34-bcc6-8bf4-6004-26f3971db47d"]
  }
]