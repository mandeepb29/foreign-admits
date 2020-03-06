import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SProfileComponent } from './s-profile.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: SProfileComponent
  }
]

@NgModule({
  declarations: [SProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class SProfileModule { }
