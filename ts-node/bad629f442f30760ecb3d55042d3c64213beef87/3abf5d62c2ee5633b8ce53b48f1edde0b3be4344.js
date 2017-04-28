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
    res.json("Hello World 100");
});
//# sourceMappingURL=/home/klefeber/Desktop/hessen-web/ts-node/bad629f442f30760ecb3d55042d3c64213beef87/3abf5d62c2ee5633b8ce53b48f1edde0b3be4344.js.map