import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent implements OnInit {

  resume;
  sop;
  lor;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.resume = new FormGroup({
      resume: new FormControl(null, { validators: [Validators.required] }),
    })

    this.sop = new FormGroup({
      sop: new FormControl(null, { validators: [Validators.required] }),
    })

    this.lor = new FormGroup({
      lor: new FormControl(null, { validators: [Validators.required] }),
    })
  }

  onResumePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    if(!file.type.includes('pdf')) {
      return alert("Only image is supported");
    }
    this.resume.patchValue({ resume: file });
    this.resume.get("resume").updateValueAndValidity();
  }

  onSOPPick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    if(!file.type.includes('pdf')) {
      return alert("Only image is supported");
    }
    this.sop.patchValue({ sop: file });
    this.sop.get("sop").updateValueAndValidity();
  }

  onLORPick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    if(!file.type.includes('pdf')) {
      return alert("Only image is supported");
    }
    this.lor.patchValue({ lor: file });
    this.lor.get("lor").updateValueAndValidity();
  }

  addResume() {
    console.log(this.resume)
    if(this.resume.invalid) {
      return;
    }
    this.common.uploadResume(this.resume.value)
    .subscribe(result => {
      console.log(result);
    })
  }

  addSOP() {
    if(this.sop.invalid) {
      return;
    }
    this.common.uploadSOP(this.sop.value)
    .subscribe(result => {
      console.log(result);
    })
  }

  addLOR() {
    if(this.lor.invalid) {
      return;
    }
    this.common.uploadLOR(this.lor.value)
    .subscribe(result => {
      console.log(result);
    })
  }

}
