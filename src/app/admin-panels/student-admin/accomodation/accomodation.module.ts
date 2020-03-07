import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccomodationComponent } from './accomodation.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: AccomodationComponent
  }
]


@NgModule({
  declarations: [AccomodationComponent],
  imports: [
    CommonModule,
    NgxMasonryModule, NgxMasonryModule,
    RouterModule.forChild(routes)
  ]
})

export class AccomodationModule { }
