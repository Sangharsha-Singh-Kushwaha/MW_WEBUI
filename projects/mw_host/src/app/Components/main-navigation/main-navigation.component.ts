import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss'
})
export class MainNavigationComponent {

  constructor(private router:Router){}

  navigationPath(params:any){
    params == "customer" ? this.router?.navigateByUrl('customers/customer') : this.router?.navigateByUrl('products/product');
  }
}
