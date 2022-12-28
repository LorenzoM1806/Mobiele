import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CavaPageRoutingModule } from './cava-routing.module';

import { CavaPage } from './cava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CavaPageRoutingModule
  ],
  declarations: [CavaPage]
})
export class CavaPageModule {}
