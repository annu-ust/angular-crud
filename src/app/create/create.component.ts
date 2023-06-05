import { Component } from '@angular/core';
import { Student } from '../model/Student';
import { StudentserviceService } from '../Service/studentservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
student:Student=new Student();
constructor(private studentservice:StudentserviceService){}
ngOnInit():void{}
onSubmit(){
  this.saveStudent();
   console.log(this.student);
}
  saveStudent() {
   this.studentservice.saveStudent(this.student).subscribe(data=>{console.log(data)},error=>console.log(error));
  }
}
