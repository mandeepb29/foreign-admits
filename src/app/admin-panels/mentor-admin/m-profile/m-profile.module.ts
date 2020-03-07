import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MProfileComponent } from './m-profile.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: MProfileComponent
  }
]

@NgModule({
  declarations: [MProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class MProfileModule { }
