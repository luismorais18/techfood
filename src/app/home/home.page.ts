import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CarrinhoPage } from '../carrinho/carrinho/carrinho.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController, private ctrl: NavController) {}

  async carrinho(){
    const modal = await this.modalController.create({
      component: CarrinhoPage
    });
    return await modal.present();
  }

}
