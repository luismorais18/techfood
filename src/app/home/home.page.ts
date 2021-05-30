import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Carrinho } from 'src/Classes/carrinho';
import { Item } from 'src/Classes/item';
import { CarrinhoPage } from '../carrinho/carrinho/carrinho.page';
import { JsonServiceService } from '../services/json-service.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  car:Carrinho;
  itens:Array<Item>;

  constructor(private modalController: ModalController,private orientacao: ScreenOrientation, private ctrl: NavController, private jsonService :JsonServiceService) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
    this.itens=this.jsonService.getItens();
  }

  async carrinho(){
    const modal = await this.modalController.create({
      component: CarrinhoPage
    });
    return await modal.present();
  }

  verPrato(item:Item){
    this.jsonService.goRota("plate",item)
  }

}
