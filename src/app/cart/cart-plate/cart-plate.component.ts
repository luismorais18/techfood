import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PlateService } from 'src/app/services/cart/plate.service';
import { JsonServiceService } from 'src/app/Services/json-service.service';
import { ShareService } from 'src/app/Services/share.service';
import { Item } from 'src/Classes/item';



@Component({
  selector: 'app-cart-plate',
  templateUrl: './cart-plate.component.html',
  styleUrls: ['./cart-plate.component.scss'],
})
export class CartPlateComponent implements OnInit {

  plate: Item = new Item;
  changedPlate: boolean = false;

  checkboxList: { val: String, isChecked: boolean }[] = [];
  lista: Array<Item> = [];
  conteudo: String[] = [];

  constructor(
    public toastController: ToastController,
    private jsonService: JsonServiceService,
    private share: ShareService,
    private router: Router) { }

  ngOnInit() {
    // get the ingredients/content of the plate
    this.jsonService.getPlate().subscribe((res: any) => {
      this.plate = res;
      console.log(this.plate);

      for (let i = 0; i < this.plate.conteudoOriginal.length; i++) {

        if(this.plate.conteudo.includes(this.plate.conteudoOriginal[i])) {
          this.checkboxList.push( { val:this.plate.conteudoOriginal[i], isChecked: true })
        } else {
          this.checkboxList.push( { val:this.plate.conteudoOriginal[i], isChecked: false })
        }
      }
    });


    this.share.listaAtual.subscribe((res: Array<Item>) => { this.lista = res; });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Não é possível guardar um prato sem ingredientes',
      duration: 1500
    });
    toast.present();
  }

  checkboxListToArray(list: { val: String, isChecked: boolean }[]) {
    let temp: String[] = []
    for (let i = 0; i < list.length; i++) {
      if(list[i].isChecked) {
        temp.push(this.checkboxList[i].val);
      }
    }
    return temp;
  }


  save() {
    for (let i = 0; i < this.lista.length; i++) {
      console.log("Estou a verificar o nome");
      if(this.lista[i].nome == this.plate.nome) {
        this.lista[i].conteudo = this.checkboxListToArray(this.checkboxList);
      }
    }

    this.share.atualizarLista(this.lista);
    this.router.navigate(['/cart']);
  }
}
