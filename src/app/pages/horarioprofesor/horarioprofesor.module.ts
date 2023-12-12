import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioprofesorPageRoutingModule } from './horarioprofesor-routing.module';

import { HorarioprofesorPage } from './horarioprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioprofesorPageRoutingModule
  ],
  declarations: [HorarioprofesorPage]
})
export class HorarioprofesorPageModule {}
