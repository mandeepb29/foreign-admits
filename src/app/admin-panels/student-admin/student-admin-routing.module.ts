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
        { path: 'uni-details', loadChildren: './university-details/university-details.module#UniversityDetailsModule' },
        { path: 'profile', loadChildren: './s-profile/s-profile.module#SProfileModule' },
        { path: 'mentors', loadChildren: './s-mentors/s-mentors.module#SMentorsModule' },
        { path: 'upload-docs', loadChildren: './upload-documents/upload-documents.module#UploadDocumentsModule' },
        { path: 'mock-visa', loadChildren: './mock-visa/mock-visa.module#MockVisaModule' },
        { path: 'accomodation', loadChildren: './accomodation/accomodation.module#AccomodationModule' },
        { path: 'forex', loadChildren: './forex/forex.module#ForexModule' },
        { path: 'loan', loadChildren: './loan/loan.module#LoanModule' },
        { path: 'air-travel', loadChildren: './air-travel/air-travel.module#AirTravelModule' },
        { path: 'booked-mentors', loadChildren: './booked-mentors/booked-mentors.module#BookedMentorsModule' },
        { path: 'services-applied', loadChildren: './services-applied/services-applied.module#ServicesAppliedModule' },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class StudentAdminRoutingModule { }