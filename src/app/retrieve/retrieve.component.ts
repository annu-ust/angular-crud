import { Component } from '@angular/core';
import { Student } from '../model/Student';
import { StudentserviceService } from '../Service/studentservice.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {
  

  constructor(private Service:StudentserviceService){
    
  }
  students: Student[]=[];
  ngOnInit(): void {
    this.students= this.getStudents();
  }
 

  getStudents():any{
    this.Service.getStudents().subscribe((students: Student[])=>{
    this.students =students;
  });
}

}
