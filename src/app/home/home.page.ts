import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Carrinho } from 'src/Classes/carrinho';
import { Item } from 'src/Classes/item';
import { CarrinhoPage } from '../carrinho/carrinho/carrinho.page';
import { JsonServiceService } from '../Services/json-service.service';
import { ShareService } from '../Services/share.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  car:Carrinho;
  itens:Array<Item>;
  quantidadeCarrinho: number = 0;
  pesquisa: string = "";
  filteredItems: any;
  itensCopy: Item[];

  constructor(
    private modalController: ModalController,
    private ctrl: NavController,
    private jsonService :JsonServiceService,
    private share: ShareService,
    private orientacao: ScreenOrientation)  {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
    this.itens=this.jsonService.getItens();
    this.itensCopy = this.itens;
  }

  ngOnInit(): void {
    this.share.listaAtual.subscribe((res: Array<Item>) => {
      this.quantidadeCarrinho = res.length;

    });
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

  assignCopy(){
    this.filteredItems = Object.assign([], this.itens);
  }
  filterItem(value){

    this.itens = this.itensCopy;

    if(value) {
      this.itens = this.itens.filter((i: Item) => i.nome.toLowerCase().includes(value.toLowerCase()));
    }
  }
}

