import { NgModule } from '@angular/core';


import { SharedModule } from '../shared';
import { SearchComponent } from './search.component';
import { SerachRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SerachRoutingModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
  ]
})
export class SearchModule {}
