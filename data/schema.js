import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql';

let Schema = (db) => {

  let store = {};

  let dialogType = new GraphQLObjectType({
    name: 'Dialog',
    fields: () => ({
      _id: {type: GraphQLString},
      hero: {type: GraphQLString},
      line: {type: GraphQLString}
    })
  });

  let storeType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      dialogs: {
        type: new GraphQLList(dialogType),
        resolve: () => db.collection("dialogs").find({}).toArray()
      }
    })
  });

  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        store: {
          type: storeType,
          resolve: () => store
        }
      })
    })
  });
};

export default Schema;
