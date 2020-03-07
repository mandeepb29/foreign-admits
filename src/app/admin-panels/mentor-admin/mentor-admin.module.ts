import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorAdminComponent } from './mentor-admin.component';
import { MDashboardComponent } from './m-dashboard/m-dashboard.component';
import { MentorAdminHeaderComponent } from './mentor-admin-header/mentor-admin-header.component';
import { MentorAdminSidebarComponent } from './mentor-admin-sidebar/mentor-admin-sidebar.component';
import { MentorAdminRoutingModule } from './mentor-admin-routing.module';


@NgModule({
  declarations: [MentorAdminComponent, MDashboardComponent, MentorAdminHeaderComponent, MentorAdminSidebarComponent],
  imports: [
    CommonModule,
    MentorAdminRoutingModule
  ]
})

export class MentorAdminModule { }
