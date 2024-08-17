import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", redirectTo:"customers/customer", pathMatch:'full'},
  {path:"customers", loadChildren: () => import('./Components/customer-list.module').then(m => m.CustomerListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
