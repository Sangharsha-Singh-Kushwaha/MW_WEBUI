import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {


  list:any;
  ngOnInit(){

    // this.list.forEach((ele:any) => {
    //   console.log(ele)
    // })
  }

}
