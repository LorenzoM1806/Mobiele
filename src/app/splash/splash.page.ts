import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public router: Router, public  authService: AuthService) {
    if(this.authService.isLoggedIn())
    {
      setTimeout(() =>{
        this.authService.goToCurrentPage('home');
     },2000);
    }
    else
    {
      setTimeout(() =>{
        this.authService.goToCurrentPage('login');
     },2000);
    }
  }

  ngOnInit() {
  }

}
