import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from '../Models/UI-Models/gender.model';
import { Student } from '../Models/UI-Models/student.model';
import { GenderService } from '../Services/gender.service';
import { StudentService } from '../students/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentId:string|null|undefined;
  isExistingStudent:boolean=true;
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
  genderList:Gender[]=[];

  constructor(private _studentService:StudentService,private _route:ActivatedRoute,private _genderservice:GenderService
    ,private _snackbar:MatSnackBar,private _router:Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe(param=>{
      this.studentId=param.get('id');
    })
    if(this.studentId){
      if(this.studentId.toLowerCase()==='Add'.toLocaleLowerCase()){
        this.isExistingStudent=false;
      }
      else{
        this._studentService.getStudent(this.studentId).subscribe(res=>{
          this.student=res;
          console.log('student',this.studentId,res);
        });
      }
    }
    this._genderservice.getGenderList().subscribe(res=>{
      this.genderList=res;
    })
  }

  onUpdate(event:any){
    console.log('update',event,this.student);
    this._studentService.updateStudent(this.student.id,this.student).subscribe(res=>{
      console.log(res);
      this._snackbar.open("updated Succesfully!!",undefined,{
        duration:1000
      })
    });
  }

  onDelete(event:any){
    console.log('update',event,this.student);
    this._studentService.deleteStudent(this.student.id).subscribe(res=>{
      console.log(res);
      this._router.navigateByUrl('/');
      this._snackbar.open("deleted Succesfully!!",undefined,{
        duration:2000
      })
    });
  }

  onAdd(event:any){
    console.log('update',event,this.student);
    this._studentService.AddStudent(this.student).subscribe(res=>{
      console.log(res);
      this._router.navigateByUrl(`student/${res.id}`);
      this._snackbar.open("Added Succesfully!!",undefined,{
        duration:1000
      })
    });
  }
}
