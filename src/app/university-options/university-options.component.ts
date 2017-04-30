import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../services/student.service';
@Component({
  selector: 'app-university-options',
  templateUrl: './university-options.component.html',
  styleUrls: ['./university-options.component.css']
})
export class UniversityOptionsComponent implements OnInit {
  selectedUniversity: string;
  students:Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
  updateStudents() {
    let self= this;
    this.studentService.getPrefferedUniversities(this.selectedUniversity).then(function(students) {
      self.students = students;
    });
  }
}
