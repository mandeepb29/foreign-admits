import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(public http: HttpClient, public auth: AuthService) {}

  uploadResume(values) {
    const form = new FormData();
    form.append('resume',values.resume);
    form.append('id',this.auth.id);

    return this.http
    .post<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/student-resume",
      form
    );
  }

  uploadLOR(values) {
    const form = new FormData();
    form.append('letter_of_recommendation',values.lor);
    form.append('id',this.auth.id);

    return this.http
    .post<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/student-lor",
      form
    );
  }

  uploadSOP(values) {
    const form = new FormData();
    form.append('sop',values.sop);
    form.append('id',this.auth.id);

    return this.http
    .post<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/student-sop",
      form
    );
  }

  dreamCollege(values) {
    return this.http
    .post<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/dream-college",
      values
    );
  }

  registerForEvent(values) {
    return this.http
    .post<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/register-for-event",
      values
    );
  }

  contact(values) {
    return this.http
    .post<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/contact",
      values
    );
  }

  getPastEvents() {
    return this.http
    .get<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/past-event"
    );
  }

  getUpcomingEvents() {
    return this.http
    .get<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/upcoming-event"
    );
  }

  getBlogs() {
    return this.http
    .get<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/blog"
    );
  }

  getSingleBlogs(id) {
    return this.http
    .get<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/blog/"+id
    );
  }
}
