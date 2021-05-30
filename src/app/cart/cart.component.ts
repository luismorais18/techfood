import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Carrinho } from 'src/Classes/carrinho';
import { Item } from 'src/Classes/item';
import { AppComponent } from '../app.component';
import { JsonServiceService } from '../Services/json-service.service';
import { ShareService } from '../Services/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  lista:Item[] = [];
  carrinho: Carrinho = new Carrinho;

  constructor(public alertController: AlertController,
              public appComponent: AppComponent,
              private shareService: ShareService,
              private jsonService: JsonServiceService) { }

  ngOnInit() {
    this.carrinho.lista = [];
    this.shareService.listaAtual.subscribe((res: Array<Item>) => {
      
      this.carrinho.lista = res;
    })
  }

  verPrato(item:Item){
    this.jsonService.goRota("cart/cart-plate",item)
  }

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
