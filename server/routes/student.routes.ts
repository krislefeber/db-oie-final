import { Router } from 'express';
import { IStudentDAO } from '../dao/IStudent.dao';
const StudentRouter:Router = Router();
var studentDAO:IStudentDAO;
StudentRouter.get('/', function(req, res, next) {
  res.json("getting an account?");
});

StudentRouter.get('/course/:email', function(request, response, next) {
  console.log("student email: " + request.params['email']);
  studentDAO.getRequestedCourses(request.params['email']).then(courses => { response.json(courses); });
});

StudentRouter.get('/universityChoices/:homeSystem', function(request, response, next) {
  studentDAO.getStudentsByUniversity(request.params['homeSystem']).then(students => { response.json(students)})
});

StudentRouter.get('/applicationDates:homeSystem', function(request, response, next) {
  studentDAO.getStudentsByTerm(request.params['homeSystem']).then(students => {response.json(students)});
});


export {StudentRouter};
