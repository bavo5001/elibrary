import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import SignaturePad from "signature_pad";
@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit, AfterViewInit {

  @ViewChild('sPad', {static: true}) signaturePadElement;
  signaturePad: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }
  clear(){
    this.signaturePad.clear();
  }
  undo(){
    const data = this.signaturePad.toData();
    if(data){
      data.pop();
      this.signaturePad.toData(data);
    }
  }
  download(dataURL, filename) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  dataURLToBlob(dataURL): object {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }
  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      this.download(dataURL, 'signature.png');
    }
  }

  saveJPG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL('image/jpeg');
      this.download(dataURL, 'signature.jpg');
    }
  }

  saveSVG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL('image/svg+xml');
      this.download(dataURL, 'signature.svg');
    }
  }
}