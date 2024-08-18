import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

const customerRemoteEntry:any = environment["customersMfe"];
const productRemoteEntry:any = environment["productsMfe"];

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: customerRemoteEntry,
      exposedModule: './Module'
    })
      .then(m => m.CustomerListModule)
  },
  {
    path: 'products',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: productRemoteEntry,
      exposedModule: './Module'
    })
      .then(m => m.ProductListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
