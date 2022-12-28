import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FruitsappenPage} from '../fruitsappen/fruitsappen.page';


const routes: Routes = [
  {
    path: '',
    component: FruitsappenPage
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsappenPageRoutingModule {}
