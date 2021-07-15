/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/database/system.js
 * @Author: liujianwei1
 * @Date: 2021-07-13 10:40:11
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

// # 系统
// type System{
//   _id: ID!
//   name: String!
//   description: String!
//   # 系统下面的角色
// roles: [Role]
//   # 系统拥有的权限
// permissions: [Permission]
// }

export default [
  {
    _id: "d348abb8-7dd9-b720-564b-cb61d795631b",
    name: "供应链系统",
    description: "供应链系统",
    roles: ['3bdb4d34-bcc6-8bf4-6004-26f3971db47d', '66d5c811-94ba-1059-459d-fc46f6713c1d',
      'de549491-e839-9a07-f631-47c81e84ee89'],
    permissions: ['6ab7ea3a-19f1-8899-3060-c54288b9bed1', 'c40b7b0f-72b1-8a1c-6569-f6ee21db3562', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '2041547e-dd11-c8f5-803c-1cd8aeda79f3'
    ]
  },
  {
    _id: "348c32fa-d030-32d5-fd64-918dc4bb7941",
    name: "客服工作台",
    description: "客服工作台",
    roles: ['b3abf49f-2b10-4da2-995d-9e5ef4b0bc4c', 'bb2d9f4f-b811-796c-e1a3-71b2dd472c02'],
    permissions: ['c9116882-2937-6154-6423-2bfbfc773be8', 'b61b2c8b-937c-bff7-fa7a-e9fd35268257',
      'e3789b55-acb2-cfdd-8ea2-e3edf17d8347',
      '9c07c6ea-65cc-2e0b-3ce0-b6e789459627']
  },
  {
    _id: "1a0d8992-2bc0-b111-7de7-f311424d82b3",
    name: "交易平台",
    description: "交易平台",
    roles: ['52850939-8a40-ab64-adf6-96c5cacf779a', '4b35cd27-ff0d-c668-f372-baf19a2dc012'],
    permissions: [
      '14d7edf5-f027-17ad-5cb6-f4b58e44aec9', 'de60d4d7-237f-9206-4b5c-d6116594f214',
      'b8ece7c0-6143-d263-939f-41d1819fb80e',
      '7d67002d-04f2-459d-e0aa-b7e6b20007a3'
    ]
  },
  {
    _id: "d1eddf8b-2772-657e-9c72-4f943b2001cc",
    name: "评论系统管理平台",
    description: "评论系统管理平台",
    roles: ['e7be066c-1ffb-0352-44e7-b8c24bddfe0c', '5cabc08c-b241-68cf-572b-a84350b19d83', 'b9ef820b-58fc-2935-e674-7824af92ad15'],
    permissions: [
      'fa311277-14ca-de9a-4d51-9925299de555', 'd5678120-849d-f82c-6fa9-929da6cc8a31',
      '83eef75a-fc0d-ba6c-0b50-abe27a917c16',
      '42bf2262-9f51-2ab7-b03b-3a2ef5038669']
  }
]