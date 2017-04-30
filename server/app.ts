import * as express from 'express';
import * as compression from 'compression';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as pretty from 'express-prettify';

import { StudentRouter } from './routes/student.routes';
//setup express app
const app:express.Express = express();
app.disable('x-powered-by');
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(pretty({ query: 'pretty' }));
//set REST API routes
const api = express.Router();
app.use('/api',api);
api.use('/student', StudentRouter);
api.get('/test', function(req, res) {
  res.json("Hello World 10100");
});



export {app};
