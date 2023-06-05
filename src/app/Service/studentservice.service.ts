import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student } from '../model/Student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http: HttpClient) { }
  getStudents(){
 return  this.http.get<Student[]>("http://localhost:8090/api/v2/fetch/all");}
 
 saveStudent(student:Student):Observable<Object>{
  return this.http.post("http://localhost:8090/api/v2/create",student);
}
}
