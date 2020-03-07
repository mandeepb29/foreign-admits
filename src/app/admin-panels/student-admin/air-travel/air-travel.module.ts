import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirTravelComponent } from './air-travel.component';
import { RouterModule ,Route} from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
  {
  path: '',
  component: AirTravelComponent
  }
]



@NgModule({
  declarations: [AirTravelComponent],
  imports: [
    CommonModule, NgxMasonryModule,
    RouterModule.forChild(routes)
  ]
})
export class AirTravelModule { }
