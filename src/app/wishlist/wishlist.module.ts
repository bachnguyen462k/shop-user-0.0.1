import { NgModule } from '@angular/core';

import { WishlistComponent } from './wishlist.component';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { SharedModule } from '../shared';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    SharedModule,
    WishlistRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    WishlistComponent
  ]
})
export class   WishlistModule {}
