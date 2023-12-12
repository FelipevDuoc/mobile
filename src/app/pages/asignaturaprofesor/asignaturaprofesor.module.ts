import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaprofesorPageRoutingModule } from './asignaturaprofesor-routing.module';

import { AsignaturaprofesorPage } from './asignaturaprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaprofesorPageRoutingModule
  ],
  declarations: [AsignaturaprofesorPage]
})
export class AsignaturaprofesorPageModule {}
