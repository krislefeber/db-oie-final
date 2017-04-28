"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var compression = require("compression");
var body_parser_1 = require("body-parser");
var Account_routes_1 = require("./routes/Account.routes");
var University_routes_1 = require("./routes/University.routes");
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
api.use('/account', Account_routes_1.AccountRouter);
api.use('/university', University_routes_1.UniversityRouter);
api.get('/test', function (req, res) {
    res.json("Hello World 1000");
});
//# sourceMappingURL=/home/klefeber/Desktop/db-oie-final/ts-node-196f69ef4cc30059a8ce0aecbe3857d0324d95111d64510d59ca0c8eae2cf0c6/191d2a56c3f8a65dfa4354b41470be8ab590b8690e8e5cac70afd9567977de9f/02bace4827b71a9254a789419390acd9a03b08f975ed0f8a0e49df1258c69136.js.map