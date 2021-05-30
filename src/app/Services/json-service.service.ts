import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Carrinho } from 'src/Classes/carrinho';
import { Item } from 'src/Classes/item';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  private cart:Carrinho;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  getItens(){
    let list = new Array<Item>();
    fetch('./assets/JSONFiles/Itens.json')
      .then(resposta => resposta.json())
      .then(json => {
        for(var i in json){
          let temp= new Item();
          temp.nome=json[i]["nome"];
          temp.preco=json[i]["preco"];
          temp.conteudo=json[i]["conteudo"];
          temp.conteudoOriginal=json[i]["conteudoOriginal"];
          console.log(temp);

          list.push(temp);
        }
      });
    return list;
  }

  goRota(rota: string,item:Item){
    const extras: NavigationExtras = {
      state: {
        item: item
      }
    }
    this.router.navigate([rota], extras);
  }

  getPlate() {
    return new Observable (observador => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          const plate: any = this.router.getCurrentNavigation().extras.state.item;
          observador.next(plate);
          observador.complete();
        }
      });
    });
  }

  getHistorico(){
    let list = new Array<Array<Item>>();
    fetch('./assets/JSONFiles/historico.json')
      .then(resposta => resposta.json())
      .then(json => {
        for(var i in json){
          let tempList = new Array<Item>();
          for(var j in json[i]){
            let temp= new Item();
            temp.nome=json[i][j]["nome"];
            temp.preco=json[i][j]["preco"];
            temp.conteudo=json[i][j]["conteudo"];
            tempList.push(temp);
          }
          list.push(tempList);
        }
      });
    console.log(list);
    return list;
  }

}
