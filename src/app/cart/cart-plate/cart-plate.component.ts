import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PlateService } from 'src/app/services/cart/plate.service';

@Component({
  selector: 'app-cart-plate',
  templateUrl: './cart-plate.component.html',
  styleUrls: ['./cart-plate.component.scss'],
})
export class CartPlateComponent implements OnInit {

  ingredientList: any[];
  ingredientListOriginal: any[];
  changedPlate: boolean = false;


  constructor(private plateService: PlateService, public toastController: ToastController) { }

  ngOnInit() {

    this.plateService.getIngredients().subscribe((response) => {
      this.ingredientList = response;
    });
  }

  increaseQuantity(id: number) {
    for (let i = 0; i < this.ingredientList.length; i++) {
      if(this.ingredientList[i].id == id) {
        this.ingredientList[i].quantity++;
      }
    }

    if(this.ingredientList === this.ingredientListOriginal) {
      this.changedPlate = false;
    } else {
      this.changedPlate = true;
    }
  }

  decreaseQuantity(id: number) {
    for (let i = 0; i < this.ingredientList.length; i++) {
      if(this.ingredientList[i].id == id && this.ingredientList[i].quantity > 0) {
        this.ingredientList[i].quantity--;
      }
    }
    if(this.ingredientList === this.ingredientListOriginal) {
      this.changedPlate = false;
    } else {
      this.changedPlate = true;
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Não é possível guardar um prato sem ingredientes',
      duration: 1500
    });
    toast.present();
  }


  save() {

    let ingredientQuantity = 0;
    for (let i = 0; i < this.ingredientList.length; i++) {
      if(this.ingredientList[i].quantity == 0) {
        ingredientQuantity++;
      }
    }
    if(ingredientQuantity == this.ingredientList.length) {
      this.presentToast();
    } else {


    }
  }
}
