import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

  async presentAlertMultipleButtons() {
    this.alertController.create({
      header: 'Remover',
      subHeader: 'Tem a certeza que deseja remover o item?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Sim',
          handler: (data: any) => {
            console.log('Saved Information', data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}
