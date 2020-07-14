import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  // form = new FormGroup({
  //   login: new FormControl(null, Validators.required),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  //});
  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

}
