import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../Models/UI-Models/gender.model';
import { Student } from '../Models/UI-Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  baseUrl='https://localhost:44370/';
  constructor(private _http:HttpClient) { }

  getGenderList():Observable<Gender[]>{
    return this._http.get<Gender[]>(this.baseUrl+'gender');
  }
}
