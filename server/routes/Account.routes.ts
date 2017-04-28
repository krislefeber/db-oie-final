import { Router } from 'express';
const AccountRouter:Router = Router();

AccountRouter.get("/", function(req, res, next) {
  res.json("getting an account?");
});



export {AccountRouter};
