import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  pastevents;
  upcomingevents;
  eventid;
  eventname;
  eventdesc;
  eventdate;
  form;
  constructor(public common: CommonService, public auth: AuthService) { }

  ngOnInit() {
    this.common.getPastEvents()
    .subscribe(result=> {
      this.pastevents = result.result
    })

    this.common.getUpcomingEvents()
    .subscribe(result=> {
      this.upcomingevents = result.result
    })

    this.form = new FormGroup({
      email: new FormControl(null)
    });
  }

  eventDetail(id,name, desc, date) {
    if(!this.auth.id) {
      console.log('not logged in');
      return;
    }
    this.eventid = id;
    this.eventname = name;
    this.eventdesc = desc;
    this.eventdate = date;
  }

  register() {
    console.log(this.form.value.email)
    if(!this.auth.id) {
      console.log('not logged in');
      return;
    }

    const data = {
      id:this.eventid,
      userid:this.auth.id,
      email:this.form.value.email
    }
    console.log(data)
    this.common.registerForEvent(data)
    .subscribe(result=> {
      console.log(result)
    })

  }

}
