import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BierPageRoutingModule } from './bier-routing.module';

import { BierPage } from './bier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BierPageRoutingModule
  ],
  declarations: [BierPage]
})
export class BierPageModule {}
