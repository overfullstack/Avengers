import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql';

let Schema = (db) => {

  let dialogType = new GraphQLObjectType({
    name: 'Dialog',
    fields: () => ({
      _id: {type: GraphQLString},
      hero: {type: GraphQLString},
      line: {type: GraphQLString}
    })
  });

  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        dialogs: {
          type: new GraphQLList(dialogType),
          resolve: () => db.collection("dialogs").find({}).toArray()
        }
      })
    })
  });
};

export default Schema;
