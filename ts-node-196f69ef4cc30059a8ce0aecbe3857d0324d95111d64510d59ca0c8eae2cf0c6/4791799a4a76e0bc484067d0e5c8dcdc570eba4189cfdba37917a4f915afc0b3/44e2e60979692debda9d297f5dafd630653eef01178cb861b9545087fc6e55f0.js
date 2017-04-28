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
    res.json("Hello World 1000");
});
//# sourceMappingURL=/home/klefeber/Desktop/db-oie-final/ts-node-196f69ef4cc30059a8ce0aecbe3857d0324d95111d64510d59ca0c8eae2cf0c6/4791799a4a76e0bc484067d0e5c8dcdc570eba4189cfdba37917a4f915afc0b3/44e2e60979692debda9d297f5dafd630653eef01178cb861b9545087fc6e55f0.js.map