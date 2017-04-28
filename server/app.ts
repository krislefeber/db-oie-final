import * as express from 'express';
import * as compression from 'compression';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';

import { AccountRouter } from './routes/Account';
//setup express app
const app:express.Express = express();
app.disable('x-powered-by');
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
//set REST API routes
const api = express.Router();
app.use('/api',api);
api.use('/account',AccountRouter);
api.get('/test', function(req, res) {
  res.json("Hello World 100");
});

// app.use('/', express.static('dist/client'));
// //redirect all requests to Angular Application and allow it to handle it
// app.get('*', function(req, res) {
//   res.sendFile(path.resolve('dist/client/index.html'));
// });










export {app};
