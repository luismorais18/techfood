import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Carrinho } from 'src/Classes/carrinho';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  /**
   * Variable to store the data of the cart
   */
  private carrinho = new BehaviorSubject<Carrinho>(null); // TODO ajietar este any

  /**
   * Get data of the cart
   */
  carrinhoAtual = this.carrinho.asObservable();


  constructor() { }

  /**
  * Update the data of the cart
  * @param cart Cart object
  */
  changeCart(cart: Carrinho) { // TODO ajeitar este any
    this.carrinho.next(cart);
  }
}
