import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/Services/share.service';
import { Item } from 'src/Classes/item';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor(private shareService: ShareService) { }

  ngOnInit() {
  }

  terminar(){
    let lista:Array<Item>;
    lista=[];
    this.shareService.atualizarLista(lista);
  }

}
