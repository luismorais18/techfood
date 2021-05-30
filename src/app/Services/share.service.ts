import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Carrinho } from 'src/Classes/carrinho';
import { Item } from 'src/Classes/item';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  /**
   * Variable to store the data of the cart
   */
  private lista = new BehaviorSubject<Array<Item>>([]); // TODO ajietar este any

  /**
   * Get data of the cart
   */
  listaAtual = this.lista.asObservable();


  constructor() { }

  /**
  * Update the data of the cart
  * @param cart Cart object
  */
  atualizarLista(lista: Array<Item>) { // TODO ajeitar este any
    this.lista.next(lista);
  }
}
