import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {
  form: FormGroup;
  submited: boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  login() {
    console.log(this.form.value)
    this.submited = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.auth.studentLogin(this.form.value);
  }

}
