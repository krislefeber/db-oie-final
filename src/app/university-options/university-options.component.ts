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
  visibleClasses:boolean[];
  search:string;
  selectedStudent:Student;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
  updateStudents() {
    let self= this;
    this.studentService.getPrefferedUniversities(this.selectedUniversity).then(function(students) {
      self.students = students;
      self.visibleClasses = new Array(self.students.length);
      self.visibleClasses.fill(false);
    });
  }
  filteredSearch():Student[] {
    if(this.search != undefined && this.search.length > 0) {
      return this.students.filter(student => { return student.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0});
    }
    return this.students;
  }
}
