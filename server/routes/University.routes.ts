import {Router} from 'express';

const UniversityRouter:Router = Router();

UniversityRouter.get('/', function(request, response, next) {
  response.json("university router");
})



export { UniversityRouter };
