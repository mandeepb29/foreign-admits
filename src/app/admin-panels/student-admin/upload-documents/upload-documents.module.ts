import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDocumentsComponent } from './upload-documents.component';
import { RouterModule ,Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Route[]=[
  {
  path: '',
  component: UploadDocumentsComponent
  }
]



@NgModule({
  declarations: [UploadDocumentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UploadDocumentsModule { }
