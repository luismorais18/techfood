import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Carrinho } from 'src/Classes/carrinho';
import { Item } from 'src/Classes/item';
import { AppComponent } from '../app.component';
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
              private shareService: ShareService) { }

  ngOnInit() {
    this.carrinho.lista = [];
    this.shareService.carrinhoAtual.subscribe((res: Carrinho) => {
      this.carrinho.lista.push({"nome":"sashimi", "preco":10.0, "conteudo":["arroz","peixe","molho de soja"]});
      this.carrinho.lista.push({"nome":"Hamburger", "preco":10.0, "conteudo":["Pao","carne","Queijo","Tomate","Alface","Ketchup"]});
    })
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
