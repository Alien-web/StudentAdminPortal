import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from '../Models/UI-Models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Student[]=[];
  filterString='';
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth','email', 'mobile', 'gender','edit'];
  dataSource:MatTableDataSource<Student>=new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) matPaginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort;

  constructor(private _studentService:StudentService,private _router:Router) { }

  ngOnInit() {
    this._studentService.getStudents().subscribe(res=>{
      console.log('success',res)
      this.students=res;
      this.dataSource=new MatTableDataSource<Student>(this.students);
      if(this.matPaginator){
        this.dataSource.paginator=this.matPaginator;
      }
      if(this.matSort){
        this.dataSource.sort=this.matSort;
      }
    },error=>{
      console.log('eror',error);
    })
  }

  filerStudents(event:any){
    console.log(event);
    this.dataSource.filter=this.filterString.trim();
  }

}
