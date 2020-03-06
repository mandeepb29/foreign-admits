import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAdminComponent } from './student-admin.component';
import { SDashboardComponent } from './s-dashboard/s-dashboard.component';
import { AdminSidebarModule } from '../admin-sidebar/admin-sidebar.module';
import { AdminHeaderModule } from '../admin-header/admin-header.module';
import { StudentAdminRoutingModule } from './student-admin-routing.module';
 
@NgModule({
  declarations: [StudentAdminComponent, SDashboardComponent],
  imports: [
    CommonModule,
    AdminHeaderModule,
    AdminSidebarModule,
    StudentAdminRoutingModule
  ]
})

export class StudentAdminModule { }
