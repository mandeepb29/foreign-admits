import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PlansAndPricingComponent } from './plans-and-pricing.component';

const routes: Route[]=[
  {
  path: '',
  component: PlansAndPricingComponent
  }
]

@NgModule({
  declarations: [PlansAndPricingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PlansAndPricingModule { }
