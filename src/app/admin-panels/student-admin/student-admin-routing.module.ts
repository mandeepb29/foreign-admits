import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAdminComponent } from './student-admin.component';
import { SDashboardComponent } from './s-dashboard/s-dashboard.component';

const routes: Routes = [
    {
      path: '',
      component: StudentAdminComponent,
      children: [
        { path: '', component: SDashboardComponent },
        { path: 'universities', loadChildren: './s-universities/s-universities.module#SUniversitiesModule' },
        { path: 'profile', loadChildren: './s-profile/s-profile.module#SProfileModule' }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class StudentAdminRoutingModule { }