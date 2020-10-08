import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSettingsPage } from '../modal-settings/modal-settings.page';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController,
              private storage: Storage,
              ) {}
  
  public elemLista: Array<any> = [
    {name: "Notificaciones1", value: true},
    {name: "Notificaciones2", value: false},
    {name: "Notificaciones3", value: true},
    ];

  public arrLeido = [];

  public guardarDatos() { //ver async
    this.storage.set('miArreglo', this.elemLista);
    console.log('Arreglo guardado: ', this.elemLista);
  }
  
  async leerDatos() {   
    this.arrLeido = await this.storage.get('miArreglo');
    // this.storage.get('miArreglo')
    //   .then((val) => {        
    //     this.arrLeido = val;
    //     console.log('Arreglo leído: ', val);
    //     console.log('asignado: ', this.arrLeido);
    //     }
    //   );
  }

  ngOnInit() {
    this.guardarDatos();
    this.leerDatos();
    console.log('asignado2: ', this.arrLeido);
  }
  
  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalSettingsPage,
      componentProps: {
        lista2: this.arrLeido,
      }
    });

    await modal.present();
  }
}
