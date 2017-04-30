import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student, Course, StudentService } from '../services/student.service';
@Component({
  selector: 'app-requested-courses',
  templateUrl: './requested-courses.component.html',
  styleUrls: ['./requested-courses.component.css']
})
export class RequestedCoursesComponent implements OnInit {
  @Input()
  _courses: Course[];
  @Output()
  coursesChange = new EventEmitter<Course[]>();

  constructor() { }

  ngOnInit() {
    this.courses = [
      { id: 1, name: 'course 1' },
      { id: 1, name: 'course 2' },
      { id: 1, name: 'course 3' },
    ];
  }
  @Input()
  get courses(): Course[] {
    return this._courses;
  }
  set courses(courses: Course[]) {
    this._courses = courses;
    this.coursesChange.emit(this._courses);
  }
}
