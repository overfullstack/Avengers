import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  globalIdField,
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
  mutationWithClientMutationId
} from 'graphql-relay';

let Schema = (db) => {

  let store = {};

  let dialogType = new GraphQLObjectType({
    name: 'Dialog',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve: (obj) => obj._id
      },
      hero: {type: GraphQLString},
      line: {type: GraphQLString}
    })
  });

  let storeType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      id: globalIdField("Store"),
      dialogConnection: {
        type: dialogConnection.connectionType,
        args: connectionArgs,
        resolve: (_, args) => connectionFromPromisedArray(
          db.collection("dialogs").find({}).toArray(),
          args
        )
      }
    })
  });

  let dialogConnection = connectionDefinitions({
    name: 'Dialog',
    nodeType: dialogType
  });

  let sendDialogMutation = mutationWithClientMutationId({
    name: 'SendDialog',
    inputFields: {
      hero: {type: new GraphQLNonNull(GraphQLString)},
      line: {type: new GraphQLNonNull(GraphQLString)}
    },
    outputFields: {
      dialogEdge: {
        type: dialogConnection.edgeType,
        resolve: (obj) => ({node: obj.ops[0], cursor: obj.insertedId})
      },
      store: {
        type: storeType,
        resolve: () => store
      }
    },
    mutateAndGetPayload: ({hero, line}) => {
      return db.collection("dialogs").insertOne({hero, line});
    }
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
    }),

    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => ({
        sendDialog: sendDialogMutation
      })
    })
  });
};

export default Schema;
