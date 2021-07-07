/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/apollo-koa/src/typedefs/recipe.ts
 * @Author: liujianwei1
 * @Date: 2021-07-07 16:51:43
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

import { ObjectType, Field, ID, Float, Int } from "type-graphql"
@ObjectType()
class Recipe {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}