import webpack from 'webpack';
import WebPackDevServer from 'webpack-dev-server';
import config from './webpack.config';
import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

(async () => {
  // MongoDB connection
  let db = await MongoClient.connect("mongodb://gopal:saregama@ds061395.mongolab.com:61395/avengers");

  // Express server to host GraphQl Server
  let app = express();
  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true
  }));
  app.listen(3000, () => console.log('GraphQl on localhost:3000'));

  // Webpack-dev-server for HMR
  new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(8080, 'localhost', (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('Webpack-dev-server on localhost:8080')
  });
})();
