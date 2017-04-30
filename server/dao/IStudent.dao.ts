import { Student } from '../../shared/dto/student';
export { Student } from '../../shared/dto/student';
import { Course } from '../../shared/dto/course';
export { Course } from '../../shared/dto/course';
export interface IStudentDAO {
  /**
  * Returns a list of students(name, email, home university)
  * @param univeristy: the university system the students are from
  * @return a promise containing an array of students, along with their preferred universities
  **/
  getStudentsByUniversity(universitySystem: string): Promise<Student[]>;

  /**
  * Returns a list of students(name, email, classes applied for) and the term they are applying for a Hessen University
  * @param universitySystem: the universitySystem the students are from
  * @return a promise containing an array of students and the semester they are applying for
  */
  getStudentsByTerm(universitySystem: string): Promise<Student[]>;

  /**
  *Returns the classes that a student wants to take
  * @param email: the email of the student
  * @return a Promise containing an array of courses that the student wants to take
  **/
  getRequestedCourses(email: string): Promise<Course[]>;
}
