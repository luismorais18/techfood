import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartPlateComponent } from './cart/cart-plate/cart-plate.component';
import { CartComponent } from './cart/cart.component';
import { PlateComponent } from './plate/plate.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'plate', component: PlateComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/cart-plate', component: CartPlateComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
