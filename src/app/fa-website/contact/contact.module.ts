import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule ,Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
  {
  path: '',
  component: ContactComponent
  }
]

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactModule { }
