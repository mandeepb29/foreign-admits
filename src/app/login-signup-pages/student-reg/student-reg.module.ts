import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegComponent } from './student-reg.component';
import { RouterModule ,Route} from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})

export class StudentRegModule { }
