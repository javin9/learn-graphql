/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_reflector/src/index.js
 * @Author: liujianwei1
 * @Date: 2021-06-09 17:06:27
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

const fs = require('fs');
const PORT = 4004;
import { GraphQLServer } from 'graphql-yoga';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import User from './resolvers/user';
import Post from './resolvers/post';
import Comment from './resolvers/comment';
import db from './database/index';
// 具体实现
// 每个字段定义一个函数，填写具体的实现
const resolvers = {
  Mutation,
  Query,
  Post,
  User,
  Comment,
};
const typeDefs = fs.readFileSync('./src/schema.gql', 'utf8');
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { db },
});

server.start({ port: PORT }, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
