import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorsComponent } from './mentors.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: MentorsComponent
  }
]

@NgModule({
  declarations: [MentorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MentorsModule { }
