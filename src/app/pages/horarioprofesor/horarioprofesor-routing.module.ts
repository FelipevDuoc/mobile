import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioprofesorPage } from './horarioprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioprofesorPageRoutingModule {}
