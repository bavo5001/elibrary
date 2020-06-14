import {Component, HostBinding, OnInit} from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import {ThemingService} from "./components/layout/theming.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @HostBinding('class') public cssClass: string;
  constructor(private spinner: NgxSpinnerService,
              private themingService: ThemingService) {}

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
