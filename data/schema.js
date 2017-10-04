let GraphQLSchema = require('graphql').GraphQLSchema;
let GraphQLInt = require('graphql').GraphQLInt;
let GraphQLObjectType = require('graphql').GraphQLObjectType;
let GraphQLString = require('graphql').GraphQLString;
let GraphQLList = require('graphql').GraphQLList;

let counter = 42;

let Schema = db => {
  let linkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: {
        type: GraphQLString
      },
      title: {
        type: GraphQLString
      },
      url: {
        type: GraphQLString
      }
    })
  });

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        links: {
          type: new GraphQLList(linkType),
          resolve: () => db.collection('links').find({}).toArray()
        }
      })
    })
    // mutation: new GraphQLObjectType({
    //   name: 'Mutation',
    //   fields: () => ({
    //     incrementCounter: {
    //       type: GraphQLInt,
    //       resolve: () => ++counter
    //     }
    //   })
    // })
  });
  return schema;
};
module.exports = Schema;
