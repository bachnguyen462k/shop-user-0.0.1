import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductResolver } from './product-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
      path: 'detail',
      component: ProductDetailComponent
  },
    // {
    //   path: ':slug',
    //   component: ProductDetailComponent,
    //   resolve: {
    //     article: ProductResolver
    //   }
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
