import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrisdrankPage } from './frisdrank.page';


const routes: Routes = [
  {
    path: '',
    component: FrisdrankPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrisdrankPageRoutingModule {}
