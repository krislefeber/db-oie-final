"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AccountRouter = express_1.Router();
exports.AccountRouter = AccountRouter;
AccountRouter.get("/", function (req, res, next) {
    res.write("getting an account?");
});
//# sourceMappingURL=/home/klefeber/Desktop/hessen-web/ts-node/bad629f442f30760ecb3d55042d3c64213beef87/6a27a9dffdb19d73cb728825d55b3175d7544252.js.map