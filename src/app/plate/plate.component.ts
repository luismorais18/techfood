import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Classes/item';
import { JsonServiceService } from '../services/json-service.service';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss'],
})
export class PlateComponent implements OnInit {

  item:any;
  quantidade:number;
  platePriceDisplay:number;
  cont:string;

  constructor(private jsonService:JsonServiceService) { }

  ngOnInit() {
    this.jsonService.getPlate().subscribe(plate => {
      this.item = plate;
    });
    this.quantidade = 1;
    this.platePriceDisplay=this.item.preco;
    this.cont="Conteudo:";
    for(var i in this.item.conteudo){
      this.cont= `${this.cont} ${this.item.conteudo[i]}`
    }
  }

  incrementQuantity() {
    this.quantidade++;
    this.updatePrice()

  }

  decrementQuantity() {
    this.quantidade--;
    this.updatePrice();
  }

  updatePrice() {
    this.platePriceDisplay = Math.round((this.item.preco * this.quantidade) * 100) / 100; // Round to two decimal places
  }

  adicionar(){

  }

}
