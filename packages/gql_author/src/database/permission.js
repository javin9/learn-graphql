/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/database/permission.js
 * @Author: liujianwei1
 * @Date: 2021-06-11 16:49:44
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

// type Permission {
//   _id: ID!
//   name: String!
//   description: String!
//   #权限属于哪个系统
//   system: System
// }

export default [
  // 供应链系统
  {
    _id: "6ab7ea3a-19f1-8899-3060-c54288b9bed1",
    name: '增加',
    description: "她也没富啊 给了一大把优惠券而已",
    system: "d348abb8-7dd9-b720-564b-cb61d795631b",
  },
  {
    _id: "c40b7b0f-72b1-8a1c-6569-f6ee21db3562",
    name: "修改",
    description: "能不能别炒了，都他吗快炒糊了，你啥情况根本没人关心，别自己买热搜跑出来现眼",
    system: 'd348abb8-7dd9-b720-564b-cb61d795631b'
  },
  {
    _id: "67df0b21-52a5-1fce-c1ee-2e1008eab9e1",
    name: "删除",
    description: "抑郁倾向是不是不算抑郁啊？也是真没看出她抑郁，我看挺得瑟的",
    system: 'd348abb8-7dd9-b720-564b-cb61d795631b'
  },
  {
    _id: "2041547e-dd11-c8f5-803c-1cd8aeda79f3",
    name: "查询",
    description: "我们当地小县城好多县里上班的，不用去，在当地开个门市卖东西或者干点其他的。有次买衣服没开门，问他们怎么前几天没开，说，上面检查呢，前几天上班了",
    system: "d348abb8-7dd9-b720-564b-cb61d795631b",
  },
  // 客服工作台
  {
    _id: "c9116882-2937-6154-6423-2bfbfc773be8",
    name: '增加',
    description: "她也没富啊 给了一大把优惠券而已",
    system: "348c32fa-d030-32d5-fd64-918dc4bb7941",
  },
  {
    _id: "b61b2c8b-937c-bff7-fa7a-e9fd35268257",
    name: "修改",
    description: "能不能别炒了，都他吗快炒糊了，你啥情况根本没人关心，别自己买热搜跑出来现眼",
    system: '348c32fa-d030-32d5-fd64-918dc4bb7941'
  },
  {
    _id: 'e3789b55-acb2-cfdd-8ea2-e3edf17d8347',
    name: "删除",
    description: "抑郁倾向是不是不算抑郁啊？也是真没看出她抑郁，我看挺得瑟的",
    system: '348c32fa-d030-32d5-fd64-918dc4bb7941'
  },
  {
    _id: '9c07c6ea-65cc-2e0b-3ce0-b6e789459627',
    name: "查询",
    description: "我们当地小县城好多县里上班的，不用去，在当地开个门市卖东西或者干点其他的。有次买衣服没开门，问他们怎么前几天没开，说，上面检查呢，前几天上班了",
    system: "348c32fa-d030-32d5-fd64-918dc4bb7941",
  },
  // 交易平台
  {
    _id: "14d7edf5-f027-17ad-5cb6-f4b58e44aec9",
    name: '增加',
    description: "她也没富啊 给了一大把优惠券而已",
    system: "1a0d8992-2bc0-b111-7de7-f311424d82b3",
  },
  {
    _id: "de60d4d7-237f-9206-4b5c-d6116594f214",
    name: "修改",
    description: "能不能别炒了，都他吗快炒糊了，你啥情况根本没人关心，别自己买热搜跑出来现眼",
    system: '1a0d8992-2bc0-b111-7de7-f311424d82b3'
  },
  {
    _id: 'b8ece7c0-6143-d263-939f-41d1819fb80e',
    name: "删除",
    description: "抑郁倾向是不是不算抑郁啊？也是真没看出她抑郁，我看挺得瑟的",
    system: '1a0d8992-2bc0-b111-7de7-f311424d82b3'
  },
  {
    _id: '7d67002d-04f2-459d-e0aa-b7e6b20007a3',
    name: "查询",
    description: "我们当地小县城好多县里上班的，不用去，在当地开个门市卖东西或者干点其他的。有次买衣服没开门，问他们怎么前几天没开，说，上面检查呢，前几天上班了",
    system: "1a0d8992-2bc0-b111-7de7-f311424d82b3",
  },
  // 评论系统管理平台
  {
    _id: "fa311277-14ca-de9a-4d51-9925299de555",
    name: '增加',
    description: "她也没富啊 给了一大把优惠券而已",
    system: "d1eddf8b-2772-657e-9c72-4f943b2001cc",
  },
  {
    _id: "d5678120-849d-f82c-6fa9-929da6cc8a31",
    name: "修改",
    description: "能不能别炒了，都他吗快炒糊了，你啥情况根本没人关心，别自己买热搜跑出来现眼",
    system: 'd1eddf8b-2772-657e-9c72-4f943b2001cc'
  },
  {
    _id: '83eef75a-fc0d-ba6c-0b50-abe27a917c16',
    name: "删除",
    description: "抑郁倾向是不是不算抑郁啊？也是真没看出她抑郁，我看挺得瑟的",
    system: 'd1eddf8b-2772-657e-9c72-4f943b2001cc'
  },
  {
    _id: '42bf2262-9f51-2ab7-b03b-3a2ef5038669',
    name: "查询",
    description: "我们当地小县城好多县里上班的，不用去，在当地开个门市卖东西或者干点其他的。有次买衣服没开门，问他们怎么前几天没开，说，上面检查呢，前几天上班了",
    system: "d1eddf8b-2772-657e-9c72-4f943b2001cc",
  }
]