import { NgModule } from '@angular/core';


import { SharedModule } from '../shared';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
  ]
})
export class ContactModule {}
