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
  precoTotal: number = 0;

  constructor(public alertController: AlertController,
              public appComponent: AppComponent,
              private shareService: ShareService,
              private jsonService: JsonServiceService) { }

  ngOnInit() {
    this.shareService.listaAtual.subscribe((res: Array<Item>) => {
      this.lista = [];
      this.precoTotal = 0;
      for (let i = 0; i < res.length; i++) {
        this.precoTotal += res[i].preco * res[i].quantidade;
      }

      this.lista = res;
    })
  }

  verPrato(item:Item){
    this.jsonService.goRota("cart/cart-plate",item)
  }

  async alertRemoveItem(item: Item) {
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
            for (let i = 0; i < this.lista.length; i++) {
              if(this.lista[i].nome == item.nome) {
                this.lista.splice(i, 1);
                this.precoTotal = this.precoTotal - ( item.preco * item.quantidade) ;
              }
            }

            this.shareService.atualizarLista(this.lista);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}
