import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/API-Models/student.model';

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
}
