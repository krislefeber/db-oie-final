import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Course } from '../../../shared/dto/course';
import { Student } from '../../../shared/dto/student';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class StudentService {

  constructor(private http:Http) { }

  getStudentCourses(email:string):Promise<Course[]> {
    let self = this;
    return new Promise<Course[]>(function(resolve, error) {
      self.http.get("/api/courses/" + email).toPromise().then(function(result:Response) {
        resolve(result.json());
      });
    });
  }
}
