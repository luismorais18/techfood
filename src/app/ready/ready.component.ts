import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss'],
})
export class ReadyComponent implements OnInit {

  horaEstimada: Date;
  constructor() { }

  ngOnInit() {
    var minutesToAdd=30;
    var currentDate = new Date();
    this.horaEstimada = new Date(currentDate.getTime() + minutesToAdd*60000);
  }

}
