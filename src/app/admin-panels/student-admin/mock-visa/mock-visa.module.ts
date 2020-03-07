import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockVisaComponent } from './mock-visa.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: MockVisaComponent
  }
]

@NgModule({
  declarations: [MockVisaComponent],
  imports: [
    CommonModule,
    NgxMasonryModule,
    RouterModule.forChild(routes)
  ]
})

export class MockVisaModule { }
