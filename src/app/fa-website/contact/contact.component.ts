import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  submited: boolean = false;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(null, {validators: [Validators.required]}),
      lastname: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      message: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  contact() {
    console.log(this.form.value);
    if(this.form.invalid) {
      return;
    }
    console.log(this.form.value);

    this.common.contact(this.form.value)
    .subscribe(result=> {
      console.log(result);
    })
  }

}
