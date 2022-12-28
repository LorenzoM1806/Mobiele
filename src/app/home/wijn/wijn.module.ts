import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WijnPageRoutingModule } from './wijn-routing.module';

import { WijnPage } from './wijn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WijnPageRoutingModule
  ],
  declarations: [WijnPage]
})
export class WijnPageModule {}
