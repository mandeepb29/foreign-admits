import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './fa-website/home/home.component';
import { FaWebsiteComponent } from './fa-website/fa-website.component';

const routes: Routes = [
  {
    path: '',
    component: FaWebsiteComponent,
    children: [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'plan-and-pricing',
    loadChildren: './fa-website/plans-and-pricing/plans-and-pricing.module#PlansAndPricingModule'
  },
  {
    path:'mentors',
    loadChildren: './fa-website/mentors/mentors.module#MentorsModule'
  },
  {
    path:'contact',
    loadChildren: './fa-website/contact/contact.module#ContactModule'
  },
  {
    path:'events',
    loadChildren: './fa-website/events/events.module#EventsModule'
  },
  {
    path:'universities',
    loadChildren: './fa-website/universities/universities.module#UniversitiesModule'
  },
  {
    path:'blog',
    loadChildren: './fa-website/blog/blog.module#BlogModule'
  },
  {
    path:'blogpost',
    loadChildren: './fa-website/blog-post/blog-post.module#BlogPostModule'
  }
]
  },
  {
    path:'student',
    loadChildren: './admin-panels/student-admin/student-admin.module#StudentAdminModule'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
