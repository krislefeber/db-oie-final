import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student, Course, StudentService } from '../services/student.service';
@Component({
  selector: 'app-requested-courses',
  templateUrl: './requested-courses.component.html',
  styleUrls: ['./requested-courses.component.css']
})
export class RequestedCoursesComponent implements OnInit {
  private _email: string;
  @Output()
  emailChange = new EventEmitter<string>();
  courses: Course[];

  constructor(private studentService: StudentService) { }

  set email(email: string) {
    this._email = email;
    this.getCourses();
    this.emailChange.emit(this._email);
  }
  @Input()
  get email() {
    return this._email;
  }
  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    let self = this;
    this.studentService.getStudentCourses(this.email).then(function(courses) {
      self.courses = courses;
    });
  }

}
