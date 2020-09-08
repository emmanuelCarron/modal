import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSettingsPage } from '../modal-settings/modal-settings.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalSettingsPage,
      // componentProps: {
      //   // nombre: "Emmanuel",
      //   // edad: 32,
      // }
    });

    await modal.present();
  }
}
