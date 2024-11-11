import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MwSharedService {

  constructor(private http:HttpClient) {}//injection of dependecy using constructor 

  //injection of dependecy using inject method
  // private http1:HttpClient = Inject(HttpClient);
  // private httpHeaders1:HttpHeaders = Inject(HttpHeaders);

  //using hhtpClient to make request to the server with custom httpHeader

  httpGet(url:string, queryParam?:any){
    return this.http.get(url, {headers:this.setHttpHeader()})//firts headers:this.setHttpHeader1() or headers:this.setHttpHeader()    
  }


  httpPost(url:string, payLoad:any){
    return this.http.post(url, payLoad, {headers: this.setHttpHeader()});
  }

  setHttpHeader(){
    //using constructor add unique header second way way
    let httpHeader = new HttpHeaders(
      {
        "Content-Type": "application/json;charset=UTF-8",
        // "odata": "verbose",
        // "Access-Control-Allow-Oringin": "domain",
        // "Accept": "application/json",
        // "Access-Control-Allow-Headers": "Origin, Content-Type, Accept, Authorization, X-Request-with",
        // "Cache-Control": "no-store",
        // "Pragma": "no-cache",
        // "X-Frame-Options": "SAMEORIGIN",
        // "useremailid": "loggedInUser",
        // "Authorization": "xcdfvvf"
      }
    )

    // httpHeader.set("Content-Type","application/json;charset=UTF-8");
    return httpHeader;
  }
}
