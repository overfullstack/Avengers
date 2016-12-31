import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config.js';
import express from 'express';
import Schema from '../../data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import fs from 'fs';
import renderOnServer from "./renderOnServer";

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

    let compiler = webpack(config);
    
    app.use(WebpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {colors: true}
    }));

    app.use(WebpackHotMiddleware(compiler, {}));

    app.get('/*', (req, res, next) => {
      renderOnServer(req, res, next);
    });

    await app.listen(3000, () => console.log('Express on localhost:3000'));

    // Generate schema.json
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err;
      console.log("Json Schema Created");
    });

  } catch (e) {
      console.log(e);
  }
})();
