import { Component, OnInit } from '@angular/core';
import { PlateService } from 'src/app/services/cart/plate.service';

@Component({
  selector: 'app-cart-plate',
  templateUrl: './cart-plate.component.html',
  styleUrls: ['./cart-plate.component.scss'],
})
export class CartPlateComponent implements OnInit {

  ingredientList: any[];

  constructor(private plateService: PlateService) { }

  ngOnInit() {

    this.plateService.getIngredients().subscribe((response) => {
      this.ingredientList = response;

    })
  }

}
