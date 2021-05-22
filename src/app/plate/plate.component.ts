import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss'],
})
export class PlateComponent implements OnInit {

  plateQuantity: number = 1;
  platePrice: number = 12.34; // TODO This variable will be filled from info of a database or any other data repository
  platePriceDisplay: number = this.platePrice; // Variable that will show the price to the customer

  constructor() { }

  ngOnInit() {}

  incrementQuantity() {
    this.plateQuantity++;
    this.updatePrice()

  }

  decrementQuantity() {
    this.plateQuantity--;
    this.updatePrice();
  }

  updatePrice() {
    this.platePriceDisplay = Math.round((this.platePrice * this.plateQuantity) * 100) / 100; // Round to two decimal places
  }

}
