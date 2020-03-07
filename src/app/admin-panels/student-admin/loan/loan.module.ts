import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanComponent } from './loan.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: LoanComponent
  }
]


@NgModule({
  declarations: [LoanComponent],
  imports: [
    CommonModule, NgxMasonryModule,
    RouterModule.forChild(routes)
  ]
})
export class LoanModule { }
