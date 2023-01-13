import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {redirectUnauthorizedTo,AuthGuard} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'bier',
    loadChildren: () => import('./bier/bier.module').then( m => m.BierPageModule)
  },
  {
    path: 'cava',
    loadChildren: () => import('./cava/cava.module').then( m => m.CavaPageModule)
  },
  {
    path: 'frisdrank',
    loadChildren: () => import('./frisdrank/frisdrank.module').then( m => m.FrisdrankPageModule)
  },
  {
    path: 'water',
    loadChildren: () => import('./water/water.module').then( m => m.WaterPageModule)
  },
  {
    path: 'wijn',
    loadChildren: () => import('./wijn/wijn.module').then( m => m.WijnPageModule)
  },
  {
    path: 'fruitsappen',
    loadChildren: () => import('./fruitsappen/fruitsappen.module').then( m => m.FruitsappenPageModule)
  },
  {
    path: 'shopingcart',
    loadChildren: () => import('./shopingcart/shopingcart.module').then( m => m.ShopingcartPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
