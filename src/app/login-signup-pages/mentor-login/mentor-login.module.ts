import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorLoginComponent } from './mentor-login.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: MentorLoginComponent
  }
]

@NgModule({
  declarations: [MentorLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MentorLoginModule { }
