import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Models/UI-Models/student.model';
import { StudentService } from '../students/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentId:string|null|undefined;
  student:Student={
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    mobile:0,
    dateOfBirth:'',
    profileImageUrl:'',
    genderId:'',
    gender:{
      id:'',
      description:''
    },
    address:{
      id:'',
      postalAddress:'',
      physicalAddress:''
    }
};

  constructor(private _studentService:StudentService,private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(param=>{
      this.studentId=param.get('id');
    })
    if(this.studentId){
      this._studentService.getStudent(this.studentId).subscribe(res=>{
        this.student=res;
        console.log('student',this.studentId,res);
      });
    }
  }

}
