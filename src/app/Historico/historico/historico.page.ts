import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { JsonServiceService } from 'src/app/Services/json-service.service';
import { ShareService } from 'src/app/Services/share.service';
import { Item } from 'src/Classes/item';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  historico:Array<Array<Item>>;
  lista: Item[] = [];

  constructor(
    private jsonService:JsonServiceService,
    private share : ShareService,
    public alertController: AlertController,
    private router : Router

    ) {
    this.historico=jsonService.getHistorico();
  }

  ngOnInit() {
    this.share.listaAtual.subscribe((res: Item[]) => {
      this.lista = res;
    });
  }

  async alertAddItem(items: Item[]) {
    this.alertController.create({
      header: 'Adicionar item',
      subHeader: 'Tem a certeza que deseja adicionar o item ao carrinho?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (data: any) => {

          }
        },
        {
          text: 'Sim',
          handler: (data: any) => {
            for (let i = 0; i < items.length; i++) {
              this.lista.push(items[i]);
            }
            this.share.atualizarLista(this.lista);
            this.router.navigate(['/cart']);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  async alertReplaceCart(items: Item[]) {
    this.alertController.create({
      header: 'Substituir carrinho',
      subHeader: 'Esta operação irá substituir todo o carrinho atual pelo item selecionado. Tem a certeza que deseja continuar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (data: any) => {

          }
        },
        {
          text: 'Sim',
          handler: (data: any) => {
            this.lista = [];
            for (let i = 0; i < items.length; i++) {
              this.lista.push(items[i]);
            }
            this.share.atualizarLista(this.lista);
            this.router.navigate(['/cart']);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}
