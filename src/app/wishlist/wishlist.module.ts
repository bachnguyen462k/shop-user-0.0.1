import { NgModule } from '@angular/core';

import { WishlistComponent } from './wishlist.component';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { SharedModule } from '../shared';
@NgModule({
  imports: [
    SharedModule,
    WishlistRoutingModule
  ],
  declarations: [
    WishlistComponent
  ]
})
export class   WishlistModule {}
