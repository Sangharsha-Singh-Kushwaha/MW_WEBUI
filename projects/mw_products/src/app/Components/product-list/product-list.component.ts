import { Component, Inject } from '@angular/core';
import { ProductDataService } from '../../Services/productdata.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  public products:any;
  public productList:any;
  // public searchValue: any = "";
  public paseSize:number=4;
  //public initialProducts:any;
  
  constructor(private dataService: ProductDataService){}

  ngOnInit(){ 
    this.dataService.getAllProduct().toPromise().then((res:any)=>{
      try {
        console.log(res)
        this.productList = res;
        this.products = JSON.parse(JSON.stringify(this.productList)).slice(0,this.paseSize);
        //this.initialProducts = JSON.parse(JSON.stringify(this.products))
      } catch (error) {
        console.log(error)
      }
    })
    
  }

  getCurrentPageData(event:any){
    this.products = event;
    // this.initialProducts = JSON.parse(JSON.stringify(this.products))
  }

  // searchItems() {
  //   this.products = this.searchValue && this.searchValue?.trim() !="" ? JSON.parse(JSON.stringify(this.initialProducts))?.filter( (ele:any) => ele.category?.includes(this.searchValue?.trim())) : this.initialProducts;
  // }
}
