import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {ProductsComponent} from './components/products/products.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductDetailsComponent} from './components/products/product-details/product-details.component';
import {LocalStorageGuard} from './guards/local-storage.guard';

const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent, canActivate: [LocalStorageGuard]},
  {path: 'products', component: ProductsComponent},
  {path: 'products/details', component: ProductDetailsComponent}, //если поменять порядок с нижним, то роутинг будет применён только для products/:
  {path: 'products/:categoryId', component: ProductsComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
