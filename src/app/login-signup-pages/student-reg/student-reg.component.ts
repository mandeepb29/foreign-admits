import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.scss']
})
export class StudentRegComponent implements OnInit {

  form: FormGroup;
  imagePreview;
  submited: boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required] }),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
      cpassword: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
      college: new FormControl(null, {validators: [Validators.required]}),
      specialization: new FormControl(null, { validators: [Validators.required] }),
      degree: new FormControl(null),
      image: new FormControl(null)
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if(!file.type.includes('image')) {
      return alert("Only image is supported");
    }
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = () => {
      this.imagePreview = filereader.result;
    };
    filereader.readAsDataURL(file);
  }

  register() {
    console.log(this.form.value)
    this.submited = true;
    if (this.form.invalid) {
      return;
    }

    if (this.form.value.password != this.form.value.cpassword) {
      alert("Password Not Matched")
      return;2

    };
    console.log(this.form.value);
    this.auth.registerStudent(this.form.value).subscribe(result=> {
      if(result.status == 'error'){
        console.log("error",result);
        return alert("Email Aready Exist");
      }
      else{
        return alert("student added successfully");
      }
    });
  }
}
