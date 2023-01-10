import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopingcartPage } from './shopingcart.page';

const routes: Routes = [
  {
    path: '',
    component: ShopingcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopingcartPageRoutingModule {}
