import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PlateComponent } from './plate/plate.component';
import { CartComponent } from './cart/cart.component';
import { CartPlateComponent } from './cart/cart-plate/cart-plate.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HistoricoPage } from './Historico/historico/historico.page';
import { ReadyComponent } from './ready/ready.component';


@NgModule({
  declarations: [AppComponent, PlateComponent, CartComponent, CartPlateComponent, ReadyComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ScreenOrientation],
  bootstrap: [AppComponent],
})
export class AppModule {}
