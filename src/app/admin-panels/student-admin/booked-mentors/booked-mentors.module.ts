import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedMentorsComponent } from './booked-mentors.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: BookedMentorsComponent
  }
]

@NgModule({
  declarations: [BookedMentorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class BookedMentorsModule { }
