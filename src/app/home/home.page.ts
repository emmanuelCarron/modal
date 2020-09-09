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
  
  public elemLista: Array<any> = [
    {name: "Notificaciones", value: true},
    {name: "Notificaciones2", value: false},
    {name: "Notificaciones3", value: true},
    ];


  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalSettingsPage,
      componentProps: {
        lista2: this.elemLista,
      //   // nombre: "Emmanuel",
      //   // edad: 32,
      }
    });

    await modal.present();
  }
}
