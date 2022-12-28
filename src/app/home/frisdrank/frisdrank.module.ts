import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrisdrankPageRoutingModule } from './frisdrank-routing.module';

import { FrisdrankPage } from './frisdrank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrisdrankPageRoutingModule
  ],
  declarations: [FrisdrankPage]
})
export class FrisdrankPageModule {}
