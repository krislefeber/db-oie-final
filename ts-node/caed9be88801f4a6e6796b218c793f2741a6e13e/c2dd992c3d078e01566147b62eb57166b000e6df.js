"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var compression = require("compression");
var body_parser_1 = require("body-parser");
var Account_1 = require("./routes/Account");
//setup express app
var app = express();
exports.app = app;
app.disable('x-powered-by');
app.use(body_parser_1.json());
app.use(compression());
app.use(body_parser_1.urlencoded({ extended: true }));
//set REST API routes
var api = express.Router();
app.use('/api', api);
api.use('/account', Account_1.AccountRouter);
api.get('/test', function (req, res) {
    res.json("Hello World 1010");
});
//# sourceMappingURL=/home/klefeber/Desktop/hessen-web/ts-node/caed9be88801f4a6e6796b218c793f2741a6e13e/c2dd992c3d078e01566147b62eb57166b000e6df.js.map