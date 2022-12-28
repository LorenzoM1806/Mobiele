import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CavaPage } from './cava.page';

const routes: Routes = [
  {
    path: '',
    component: CavaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CavaPageRoutingModule {}
