import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashPage } from './splash.page';
import { HomePage } from '../home/home.page';
import { LoginPage } from '../home/login/login.page';

const routes: Routes = [
  {
    path: '',
    component: SplashPage
  },
  {
    path: 'login',
    loadChildren: () => import('../home/login/login.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashPageRoutingModule {}
