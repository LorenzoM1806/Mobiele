import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitsappenPageRoutingModule } from './fruitsappen-routing.module';

import { FruitsappenPage } from './fruitsappen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitsappenPageRoutingModule
  ],
  declarations: [FruitsappenPage]
})
export class FruitsappenPageModule {}
