import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BierPage } from './bier.page';

const routes: Routes = [
  {
    path: '',
    component: BierPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BierPageRoutingModule {}
