import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartDetailComponent } from './cart-detail.component';
import { CartCheckOutComponent } from './cart-checkout.component';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    // resolve: {
    //   profile: CartComponent
    // },
    children: [
      {
        path: '',
        component: CartDetailComponent
      },
      {
        path: 'check-out',
        component: CartCheckOutComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
