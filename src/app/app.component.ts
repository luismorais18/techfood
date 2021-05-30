import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/Classes/carrinho';
//import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(/*public screenOrientation: ScreenOrientation*/) {}

  public carrinho: Carrinho = null;

  ngOnInit(): void {
  }



}
