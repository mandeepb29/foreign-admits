import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAdminComponent } from './student-admin.component';
 import { SDashboardComponent } from './s-dashboard/s-dashboard.component';
import { StudentAdminRoutingModule } from './student-admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
 

@NgModule({
  declarations: [StudentAdminComponent, SDashboardComponent, AdminHeaderComponent, AdminSidebarComponent],
  imports: [
    CommonModule,
    StudentAdminRoutingModule
  ]
})

export class StudentAdminModule { }
