import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {ThemingService} from "./theming.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  user: firebase.User;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private auth: AuthService, private router: Router,  private theming: ThemingService) {
    this.mobileQuery = media.matchMedia('(max-width: 993px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(){
    this.auth.getUserState().subscribe((user)=> this.user = user);
    this.themes = this.theming.themes;
  }
  themes: string[];
  changeTheme(theme: string) {
    this.theming.theme.next(theme);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  login(){
    this.router.navigate(["/login"]);
  }
  logout(){
    this.auth.logout();
  }
  register(){
    this.router.navigate(["/auth"]);
  }
}
