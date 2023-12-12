import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaprofesorPage } from './asignaturaprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaprofesorPageRoutingModule {}
