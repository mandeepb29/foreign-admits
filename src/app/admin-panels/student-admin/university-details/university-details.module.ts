import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityDetailsComponent } from './university-details.component';
import { RouterModule ,Route} from '@angular/router';


const routes: Route[]=[
  {
  path: '',
  component: UniversityDetailsComponent
  }
]

@NgModule({
  declarations: [UniversityDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UniversityDetailsModule { }
