import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../services/student.service';

@Component({
  selector: 'app-selected-term',
  templateUrl: './selected-term.component.html',
  styleUrls: ['./selected-term.component.css']
})
export class SelectedTermComponent implements OnInit {
students:Student[];
selectedUniversity:string;
search:string;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

  updateStudents(selectedUniversity) {
    let self =this;
    this.studentService.getSelectedTerm(selectedUniversity).then(function(students) {
      self.students = students;
    });
  }
  filteredSearch():Student[] {
    if(this.search != undefined && this.search.length > 0) {
      return this.students.filter(student => { return student.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0});
    }
    return this.students;
  }
}
