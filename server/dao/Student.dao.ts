import { IStudentDAO, Student, Course} from './IStudent.dao';
import { DAOHelper } from './dao';
export class StudentDAO implements IStudentDAO {
  /**
  * Returns a list of students(name, email, home university)
  * @param univeristy: the university system the students are from
  * @return a promise containing an array of students, along with their preferred universities
  **/
  getStudentsByUniversity(universitySystem: string): Promise<Student[]> {
    let self = this;
    return new Promise<Student[]>(function(resolve, error) {
      let sql = "SELECT Users.email, Users.name, FormResponses.response AS Home, u1.response AS choice1, u2.response AS choice2 FROM FormResponses INNER JOIN FormQuestions ON FormResponses.form_id = FormQuestions.form_id AND FormResponses.question_name = FormQuestions.question_name INNER JOIN Users ON FormResponses.email = Users.email INNER JOIN(SELECT FormResponses.response, FormResponses.email FROM FormResponses INNER JOIN FormQuestions ON FormResponses.form_id = FormQuestions.form_id AND FormResponses.question_name = FormQuestions.question_name WHERE FormResponses.question_name = 'Preferred university 1') AS u1 ON u1.email = Users.email INNER JOIN (SELECT FormResponses.response, FormResponses.email FROM FormResponses INNER JOIN FormQuestions ON FormResponses.form_id = FormQuestions.form_id AND FormResponses.question_name = FormQuestions.question_name WHERE FormResponses.question_name = 'Preferred university 2') AS u2 ON Users.email = u2.email WHERE FormResponses.question_name = 'Home university' AND FormResponses.response LIKE '" + universitySystem + "%' ORDER BY Home";
      DAOHelper.executeQuery(sql).then(function(result) {
        //console.log(result);
        let students: Student[] = [];
        result.forEach(value => {
          students.push({
            email: value['email'],
            name: value['name'],
            preferredUniversities: [value['choice1'], value['choice2']]
          });
        });
        resolve(students);
      });
    });
  }

  /**
  * Returns a list of students(name, email, classes applied for) and the term they are applying for a Hessen University
  * @param universitySystem: the universitySystem the students are from
  * @return a promise containing an array of students and the semester they are applying for
  */
  getStudentsByTerm(universitySystem: string): Promise<Student[]> {
    return new Promise<Student[]>(function(resolve, error) {
      let sql = "SELECT name, FormResponses.email, u1.response as home, FormResponses.response as Term FROM FormResponses INNER JOIN Users ON FormResponses.email=Users.email INNER JOIN(SELECT FormResponses.response as response, FormResponses.email FROM FormResponses INNER JOIN FormQuestions ON FormResponses.form_id = FormQuestions.form_id AND FormResponses.question_name = FormQuestions.question_name WHERE FormResponses.question_name = 'Home university') AS u1 ON u1.email = FormResponses.email WHERE question_name='Term' AND u1.response LIKE '" + universitySystem +"%'"
      DAOHelper.executeQuery(sql).then(function(result) {
        //console.log(result);
        let students: Student[] = [];
        result.forEach(value => {
          students.push({
            email: value['email'],
            name: value['name'],
            homeUniveristy: value['home'],
            semesterApplied: value['Term']
          });
        });
        resolve(students);
      });
    });
  }

  /**
  *Returns the classes that a student wants to take
  * @param email: the email of the student
  * @return a Promise containing an array of courses that the student wants to take
  **/
  getRequestedCourses(email: string): Promise<Course[]> {
    return new Promise<Student[]>(function(resolve, error) {
      let sql = "SELECT response as course_name FROM FormResponses NATURAL JOIN Forms WHERE question_name LIKE 'Requested course%' AND email = '" + email +"'";
      DAOHelper.executeQuery(sql).then(function(result) {
        console.log(result);
        let courses: Course[] = [];
        result.forEach(value => {
          courses.push({
            name: value['course_name']
          });
        });
        resolve(courses);
      });
    });
  }
}
