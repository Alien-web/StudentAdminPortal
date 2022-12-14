import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:'',component:StudentsComponent},
  {path:'students',component:StudentsComponent},
  {path:'student/:id',component:ViewStudentComponent},
  {path:'student/add',component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
