import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", redirectTo:"products/product", pathMatch: 'full'},
  {path:"products", loadChildren: () => import('./Components/product-list.module').then(m => m.ProductListModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
