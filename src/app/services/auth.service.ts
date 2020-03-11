import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public id;
  public email;
  public name;
  public token = null;
  public platform;
  constructor(public http: HttpClient, public route: Router) {}

  checkLocalStorage() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      return;
    }
    this.name = localStorage.getItem("name");
    this.email = localStorage.getItem("email");
    this.id = localStorage.getItem("id");
    this.platform = localStorage.getItem("platform");
    if (this.platform == "student" ) {
      if( localStorage.getItem('form_filled') == 'true') this.route.navigate(["/student"]);
      else this.route.navigate(["/"]);
     }
  }
  registerStudent(values) {
    const data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("password", values.password);
    data.append("college", values.college);
    data.append("specialization", values.specialization);
    data.append("degree", values.degree);
    data.append("image", values.image);
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/register-student",
      data
    );
  }

  studentLogin(values) {
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://foreignadmits-api.herokuapp.com/student-login",
        values
      )
      .subscribe(result => {
        console.log(result);
        if (result.status == "error") {
          return alert(result.result);
        }
        localStorage.setItem("id", result.result.student._id);
        localStorage.setItem("email", result.result.student.email);
        localStorage.setItem("name", result.result.student.name);
        localStorage.setItem("token", result.result.token);
        localStorage.setItem("form_filled", result.result.student.form_filled);
        localStorage.setItem("platform", "student");
        this.email = result.result.student.email;
        this.id = result.result.student._id;
        this.name = result.result.student.name;
        this.token = result.result.token;
        if( localStorage.getItem('form_filled') == 'true') this.route.navigate(["/student"]);
        else this.route.navigate(["/student/profile"]);
      });
  }

  updateStudentProfile(values) {
    return this.http.patch<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/update-student-profile",
      values
    );
  }

  logout() {
    this.token = null;
    this.email = null;
    this.name = null;
    this.id = null;
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('platform');
    localStorage.removeItem('form_filled');
    this.route.navigate(['/']);
  }

  getUser() {
    console.log("get user");
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://foreignadmits-api.herokuapp.com/student/" + this.id
    );
  }
}
