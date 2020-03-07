import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesAppliedComponent } from './services-applied.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: ServicesAppliedComponent
  }
]

@NgModule({
  declarations: [ServicesAppliedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ServicesAppliedModule { }
