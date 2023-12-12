import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaprofePage } from './asistenciaprofe.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaprofePageRoutingModule {}
