import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { CartModule } from './cart/cart.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchModule } from './search/search.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { AboutModule } from './about/about.module';
import { ProductModule } from './product/product.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, ],
  imports: [
        CartModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    SearchModule,
    WishlistModule,
    ContactModule,
    AboutModule,
    ProductModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
