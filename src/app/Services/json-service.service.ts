import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Carrinho } from 'src/Classes/carrinho';
import { Item } from 'src/Classes/item';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  private cart:Carrinho;

  constructor() { }

  clearCart(){

  }

  getCart(){
    let temp= new Item();
    return new Observable (observer => {
      fetch('./assets/JSONFiles/Cart.json')
      .then(resposta => resposta.json())
      .then(json => {
        for(var i in json){
          temp.nome=json[i]["nome"];
          temp.preco=json[i]["preco"];
          temp.conteudo=json[i]["conteudo"];
          this.cart.lista.push(temp);
        }
        observer.next(this.cart);
        observer.complete();
      });
    })
  }

  getItens(){
    let list:Array<Item>;
    let temp= new Item();
    fetch('./assets/JSONFiles/Itens.json')
      .then(resposta => resposta.json())
      .then(json => {
        for(var i in json){
          temp.nome=json[i]["nome"];
          temp.preco=json[i]["preco"];
          temp.conteudo=json[i]["conteudo"];
          list.push(temp);
        }
      });
    return list;
  }
}
