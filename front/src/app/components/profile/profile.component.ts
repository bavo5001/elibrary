import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: firebase.User;
  constructor(private auth: AuthService) { }

  ngOnInit(){
    this.auth.getUserState().subscribe((user)=> this.user = user);
  }

}
