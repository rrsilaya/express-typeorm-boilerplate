import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import connection from './config/database';
import router from './router';

const app = express();

const index = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(logger('dev'));

  app.use('/api', router);
}

connection(index);
export default app;