"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AccountRouter = express_1.Router();
exports.AccountRouter = AccountRouter;
AccountRouter.get("/", function (req, res, next) {
    res.write("getting an account?");
});
//# sourceMappingURL=/home/klefeber/Desktop/hessen-web/ts-node/caed9be88801f4a6e6796b218c793f2741a6e13e/6a27a9dffdb19d73cb728825d55b3175d7544252.js.map