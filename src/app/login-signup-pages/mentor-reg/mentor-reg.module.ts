import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorRegComponent } from './mentor-reg.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: MentorRegComponent
  }
]


@NgModule({
  declarations: [MentorRegComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MentorRegModule { }
