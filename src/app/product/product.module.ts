import { NgModule } from '@angular/core';


import { SharedModule } from '../shared';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailComponent } from './product-detail.component';
@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ],
  providers: [
  ]
})
export class ProductModule {}
