/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/apollo-koa/src/index.ts
 * @Author: liujianwei1
 * @Date: 2021-07-07 14:38:08
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */
// /*
//  * @Desc: 
//  * @FilePath: /learn-graphql/packages/apollo-koa/src/index.ts
//  * @Author: liujianwei1
//  * @Date: 2021-07-07 14:38:08
//  * @LastEditors: liujianwei1
//  * @Reference Desc: 
//  */
import "reflect-metadata"
import Koa from "koa";

import { ApolloServer, gql } from "apollo-server-koa"


async function startApolloServer() {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  }

  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  const app = new Koa()
  server.applyMiddleware({ app })
  // alternatively you can get a composed middleware from the apollo server
  // app.use(server.getMiddleware());

  // await new Promise(resolve => app.listen({ port: 4000 }, resolve))
  await new Promise((resolve) => {
    return app.listen({ port: 4000 }, () => {
      resolve(1)
    })
  })
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  return { server, app }
}

startApolloServer()

console.log('hello');
