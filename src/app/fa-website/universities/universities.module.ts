import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesComponent } from './universities.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: UniversitiesComponent
  }
]

@NgModule({
  declarations: [UniversitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UniversitiesModule { }
