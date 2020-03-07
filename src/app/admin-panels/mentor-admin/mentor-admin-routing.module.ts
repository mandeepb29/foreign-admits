import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorAdminComponent } from './mentor-admin.component';
import { MDashboardComponent } from './m-dashboard/m-dashboard.component';

const routes: Routes = [
    {
      path: '',
      component: MentorAdminComponent,
      children: [
        { path: '', component: MDashboardComponent },
        { path: 'profile', loadChildren: './m-profile/m-profile.module#MProfileModule' },
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class MentorAdminRoutingModule { }