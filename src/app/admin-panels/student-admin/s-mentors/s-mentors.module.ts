import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMentorsComponent } from './s-mentors.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: SMentorsComponent
  }
]

@NgModule({
  declarations: [SMentorsComponent],
  imports: [
    CommonModule,
    NgxMasonryModule,
    RouterModule.forChild(routes)
  ]
})

export class SMentorsModule { }
