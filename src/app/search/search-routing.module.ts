import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchAuthResolver } from './search-auth-resolver.service';


const routes: Routes = [
  {
    path: 'search/:slug',
    component: SearchComponent,
    resolve: {
      isAuthenticated: SearchAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerachRoutingModule {}
