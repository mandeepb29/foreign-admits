import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrls: ['./s-profile.component.scss']
})
export class SProfileComponent implements OnInit {

  user;
  user_basic_info;
  image;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.user = new FormGroup({
      id: new FormControl(null, { validators: [Validators.required] }),
      name: new FormControl(null, { validators: [Validators.required] }),
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      contact_no: new FormControl(null, { validators: [Validators.required] }),
      applying_for: new FormControl(null, { validators: [Validators.required] }),
      course_name: new FormControl(null, { validators: [Validators.required] }),
      course_specification: new FormControl(null, { validators: [Validators.required] }),
      course_location: new FormControl(null, { validators: [Validators.required] }),
      gre: new FormControl(null, { validators: [Validators.required] }),
      toefl: new FormControl(null, { validators: [Validators.required] }),
      undergrad_gpa: new FormControl(null, { validators: [Validators.required] }),
      undergrad_university: new FormControl(null, { validators: [Validators.required] }),
    });
    this.auth.getUser()
    .subscribe(result=> {
      console.log(result)
      this.user_basic_info = {
        image : result.result.profilepicture,
        name : result.result.name,
        college : result.result.college,
        specialization : result.result.specialization
      }
      if(result.result.form_filled) {
        this.user.patchValue({
          id:result.result._id,
          name:result.result.name,
          email:result.result.email,
          contact_no:result.result.contact_no,
          applying_for:result.result.applying_for,
          course_name:result.result.course_name,
          course_specification:result.result.course_specification,
          course_location:result.result.course_location,
          gre:result.result.gre,
          toefl:result.result.toefl,
          undergrad_gpa:result.result.undergrad_gpa,
          undergrad_university:result.result.undergrad_university,
        })
      }else {
        this.user.patchValue({
          id:result.result._id,
          name:result.result.name,
          email:result.result.email
        })
      }
    })
  }

  updateProfile() {
    console.log(this.user.value)
    if(this.user.invalid) {
      return;
    }
    console.log(this.user.value)
    this.auth.updateStudentProfile(this.user.value)
    .subscribe(result=> {
      console.log(result);
      alert(result.msg)
    })
  }

}
