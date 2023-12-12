import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateAssistComponent } from './components/add-update-assist/add-update-assist.component';

@NgModule({
  declarations: [CustomInputComponent, AddUpdateAssistComponent],
  exports: [
    CustomInputComponent,
    ReactiveFormsModule,
    FormsModule,
    AddUpdateAssistComponent,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
