import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MainNavigationComponent } from './Components/main-navigation/main-navigation.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './Module'
    })
      .then(m => m.CustomerListModule)
  },
  {
    path: 'products',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4400/remoteEntry.js',
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
