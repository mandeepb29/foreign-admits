import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForexComponent } from './forex.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: ForexComponent
  }
]



@NgModule({
  declarations: [ForexComponent],
  imports: [
    CommonModule, NgxMasonryModule,
    RouterModule.forChild(routes)
  ]
})
export class ForexModule { }
