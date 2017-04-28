import * as http from 'http';
import { app } from '../app';
var server = http.createServer(app);

server.listen(8080);
