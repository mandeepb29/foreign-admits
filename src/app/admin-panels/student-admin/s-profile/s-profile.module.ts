import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SProfileComponent } from './s-profile.component';
import { RouterModule ,Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class SProfileModule { }
