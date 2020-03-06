import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SUniversitiesComponent } from './s-universities.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: SUniversitiesComponent
  }
]

@NgModule({
  declarations: [SUniversitiesComponent],
  imports: [
    CommonModule,
    NgxMasonryModule,
    RouterModule.forChild(routes),
    
  ]
})

export class SUniversitiesModule { }
