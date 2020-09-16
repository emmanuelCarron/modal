import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.page.html',
  styleUrls: ['./modal-settings.page.scss'],
})
export class ModalSettingsPage implements OnInit {

  @Input() public lista2: Array<any>;

  constructor(private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              ) { }

  ngOnInit() {
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }

  actualizarValor(){
    console.log(this.lista2);
    this.presentToast('Cambio realizado');
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Salir',
      // subHeader: 'Sub',
      message: '¿Desea volver a la pantalla principal?',
      buttons: [
        {
          text: 'Si',
          handler: (salir) => {
            this.modalCtrl.dismiss();
          }
        },
        {
          text: 'No',
        }],
    });

    await alert.present();
  }

  cerrarModal(){
    this.presentAlert();
    
  }
  

  

}
