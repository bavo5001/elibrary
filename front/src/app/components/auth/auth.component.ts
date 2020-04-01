import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignaturePad} from "angular2-signaturepad/signature-pad";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    ngOnInit(): void {
      //   // this.signaturePad is now available
      //   this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
      //   this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
      // }
    }
  form = new FormGroup({
    login: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  // @ViewChild(SignaturePad) signaturePad: SignaturePad;
  // signaturePadOptions = { // passed through to szimek/signature_pad constructor
  //   'minWidth': 5,
  //   'canvasWidth': 400,
  //   'canvasHeight': 300
  // };
  OnSubmit(): any {}
}
