import { Component, Inject } from '@angular/core';
import { ProductDataService } from '../../Services/productdata.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
searchItems() {
throw new Error('Method not implemented.');
}

  public products:any;
  public searchValue: any = "";
  
  constructor(private dataService: ProductDataService){}

  ngOnInit(){ 
    this.dataService.getAllProduct().subscribe((res:any)=>{
      try {
        console.log(res)
      this.products = res;
      } catch (error) {
        console.log(error)
      }
    })
  }
}
