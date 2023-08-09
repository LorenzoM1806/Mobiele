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
    setTimeout(() => {
      if(this.authService.isLoggedIn()){
        this.router.navigate(['/home']);
      }
      else {
        this.router.navigate(['/login']);
      }
    }, 2000);
    console.log(this.authService.isLoggedIn());
  }

  ngOnInit() {
    console.log('Hi dit is een test');
  }
}
