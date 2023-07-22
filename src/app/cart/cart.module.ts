import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared';
import { CartDetailComponent } from './cart-detail.component';
@NgModule({
  imports: [
    CartRoutingModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    CartDetailComponent
  ],
  providers: [
  ]
})
export class CartModule {}