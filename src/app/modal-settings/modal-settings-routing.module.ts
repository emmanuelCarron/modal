import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSettingsPage } from './modal-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSettingsPageRoutingModule {}
