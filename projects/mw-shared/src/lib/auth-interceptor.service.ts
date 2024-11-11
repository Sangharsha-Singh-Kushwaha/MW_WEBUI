import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler):any{
    if(req.url?.indexOf("/login") != 1){
      let loginedUser:any = "abc"
      let token:any = "axderffdssss"
      const  httpHeader:any = req.clone({
        setHeaders: {
          "useremailid": loginedUser, 
          "Auth": token
        }
      })   
      return next.handle(httpHeader);
    }
  }
}
