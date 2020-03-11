import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  submited: boolean = false;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, { validators: [Validators.required] }),
      contact_no: new FormControl(null, {validators: [Validators.required]}),
      term: new FormControl(null, {validators: [Validators.required]}),
      gre_verbal: new FormControl(null, {validators: [Validators.required]}),
      gre_toefl: new FormControl(null, {validators: [Validators.required]}),
      gre_quant: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  register() {
    console.log(this.form.value);
    if(this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.common.dreamCollege(this.form.value)
    .subscribe(result=> {
      console.log(result);
    })
  }

}
