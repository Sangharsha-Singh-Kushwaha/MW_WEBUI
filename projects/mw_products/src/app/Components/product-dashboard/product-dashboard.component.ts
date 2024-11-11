import { Component } from '@angular/core';
import { ProductDataService } from '../../Services/productdata.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss'
})
export class ProductDashboardComponent {

  constructor(private dataService: ProductDataService){}
  public products:any=[]
  ngOnInit(){
    this.dataService.getAllProduct().subscribe((res:any)=>{
      try {
         this.products = res;
      } catch (error) {
        console.log(error)
      }
    }) 
  }
}
