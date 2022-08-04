import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/API-Models/student.model';
import { UpdateStudentRequest } from '../Models/UI-Models/UpdateStudentrequest';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl='https://localhost:44370/';
  constructor(private _http:HttpClient) { }

  getStudents():Observable<Student[]>{
    return this._http.get<Student[]>(this.baseUrl+'students');
  }
  getStudent(id:string):Observable<Student>{
    return this._http.get<Student>(this.baseUrl+'students/'+id);
  }
  updateStudent(studentId:string,updateRequest:Student):Observable<Student>{
    const updatedstudentrequest:UpdateStudentRequest={
      firstName:updateRequest.firstName,
    lastName:updateRequest.lastName,
    email:updateRequest.email,
    mobile:updateRequest.mobile,
    dateOfBirth:updateRequest.dateOfBirth,
    genderId:updateRequest.genderId,
    // physicalAddress:updateRequest.address.physicalAddress,
    // postalAddress:updateRequest.address.postalAddress
    }
    return this._http.post<Student>(this.baseUrl+'students/'+studentId,updatedstudentrequest);
  }
}
