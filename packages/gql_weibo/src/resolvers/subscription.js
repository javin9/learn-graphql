/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_weibo/src/resolvers/subscription.js
 * @Author: liujianwei1
 * @Date: 2021-07-16 14:48:26
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

// 对象-subscribe-return 
export const Subscription = {
  somethingChanged: {
    // 订阅功能
    subscribe (parent, args, { db, pubsub }, info) {
      let count = 0
      setInterval(() => {
        count++
        // 参数1：通道名称
        pubsub.publish('somethis_topic', {
          somethingChanged: count
        })
      }, 2000)
      // 返回通道名称
      return pubsub.asyncIterator('somethis_topic')
    }
  },
  comment: {
    subscribe (parent, args, { db, pubsub }, info) {
      return pubsub.asyncIterator('comment_topic')
    }
  }
}

// subscription{
//   somethingChanged
// }

curl 'https://oapi.dingtalk.com/robot/send?access_token=8e74efbb41a9203940227bc512e65805989d8db1a8be999b3f5a15b7d07ad964' \
-H 'Content-Type: application/json' \
-d '{"msgtype": "text","text": {"content":"我就是我, 是不一样的烟火"}}'