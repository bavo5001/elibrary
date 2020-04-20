import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  this.spinner.show().then();
  setTimeout(() =>{
    this.spinner.hide().then();
    }, 2500)
  }
}
