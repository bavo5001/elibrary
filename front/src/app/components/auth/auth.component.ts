import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import {AuthService} from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

  // form = new FormGroup({
  //   name: new FormControl(null, Validators.required),
  //   login: new FormControl(null, Validators.required),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  // });

}
