import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'plan-and-pricing',
    loadChildren: './plans-and-pricing/plans-and-pricing.module#PlansAndPricingModule'
  },
  {
    path:'mentors',
    loadChildren: './mentors/mentors.module#MentorsModule'
  },
  {
    path:'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path:'events',
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path:'universities',
    loadChildren: './universities/universities.module#UniversitiesModule'
  },
  {
    path:'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path:'blogpost',
    loadChildren: './blog-post/blog-post.module#BlogPostModule'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
