import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegComponent } from './student-reg.component';
import { RouterModule ,Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
  {
  path: '',
  component: StudentRegComponent
  }
]

@NgModule({
  declarations: [StudentRegComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class StudentRegModule { }
