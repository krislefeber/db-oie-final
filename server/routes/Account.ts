import { Router } from 'express';
const AccountRouter:Router = Router();

AccountRouter.get("/", function(req, res, next) {
  res.write("getting an account?");
})



export {AccountRouter};
