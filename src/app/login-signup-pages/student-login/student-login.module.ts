import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLoginComponent } from './student-login.component';
import { RouterModule ,Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
  {
  path: '',
  component: StudentLoginComponent
  }
]

@NgModule({
  declarations: [StudentLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class StudentLoginModule { }
