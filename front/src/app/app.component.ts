import {Component, HostBinding, OnInit} from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import {ThemingService} from "./components/layout/theming.service";
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @HostBinding('class') public cssClass: string;

  constructor(private spinner: NgxSpinnerService,
              private themingService: ThemingService,
              private updates: SwUpdate) {
    updates.available.subscribe(event =>{
      updates.activateUpdate().then(()=>{
        document.location.reload();
      })
    })
  }

  ngOnInit() {
    this.spinner.show().then();
    setTimeout(() => {
      this.spinner.hide().then();
    }, 2500);
    this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
    });
  }
}
