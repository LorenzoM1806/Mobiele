import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopingcartPageRoutingModule } from './shopingcart-routing.module';

import { ShopingcartPage } from './shopingcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopingcartPageRoutingModule
  ],
  declarations: [ShopingcartPage]
})
export class ShopingcartPageModule {}
