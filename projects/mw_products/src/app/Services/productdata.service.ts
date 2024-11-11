import { Injectable } from '@angular/core';
import { MwSharedService } from 'mw-shared';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private sharedService:MwSharedService) { }

  public baseUrl:any = "https://fakestoreapi.com/";


  getAllProduct(){
    let apiUrl = "https://fakestoreapi.com/products";
    return this.sharedService.httpGet(apiUrl);
  }


}
