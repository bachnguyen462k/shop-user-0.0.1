import { NgModule } from '@angular/core';

import { ProfileArticlesComponent } from './profile-articles.component';
import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { SharedModule } from '../shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileAddressComponent } from './profile-address.component';
import { ProfileNotificationComponent } from './profile-notification.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    ProfileArticlesComponent,
    ProfileComponent,
    ProfileFavoritesComponent,
    ProfileAddressComponent,
    ProfileNotificationComponent
  ],
  providers: [
  ]
})
export class ProfileModule {}
