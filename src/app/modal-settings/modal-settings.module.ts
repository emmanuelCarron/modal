import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSettingsPageRoutingModule } from './modal-settings-routing.module';

import { ModalSettingsPage } from './modal-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSettingsPageRoutingModule
  ],
  declarations: [ModalSettingsPage]
})
export class ModalSettingsPageModule {}
