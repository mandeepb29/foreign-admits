import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsTableComponent } from './events-table.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: EventsTableComponent
  }
]


@NgModule({
  declarations: [EventsTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EventsTableModule { }
