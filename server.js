import webpack from 'webpack';
import WebPackDevServer from 'webpack-dev-server';
import config from './webpack.config';
import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import fs from 'fs';

(async () => {
  try {
    // MongoDB connection
    let db = await MongoClient.connect("mongodb://gopal:saregama@ds061395.mongolab.com:61395/avengers");
    //let db = await MongoClient.connect("mongodb://localhost:27017/avengers");
    let schema = Schema(db);

    // Express server to host GraphQl Server
    let app = express();
    app.use('/graphql', GraphQLHTTP({
      schema,
      graphiql: true
    }));
    await app.listen(3000, () => console.log('GraphQl on localhost:3000'));

    // Webpack-dev-server for HMR
    await new WebPackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true,
      proxy: {
        '/graphql': 'http://localhost:3000'
      }
    }).listen(8080, 'localhost', (err) => {
      if (err) console.log(err);
      console.log('Webpack-dev-server on localhost:8080')
    });

    // Generate schema.json
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err;

      console.log("Json Schema Created");
    })
  } catch (e) {
    console.log(e);
  }
})();
