import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from 'src/app/services/json-service.service';
import { Item } from 'src/Classes/item';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  historico:Array<Array<Item>>;

  constructor(private jsonService:JsonServiceService) {
    this.historico=jsonService.getHistorico();
  }

  ngOnInit() {
  }



}
