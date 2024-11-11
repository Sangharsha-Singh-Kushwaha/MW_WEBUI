import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptorService, GlobalChunkErrorHandlerService } from 'mw-shared';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
  ],

  providers:[ 
    provideHttpClient(withInterceptorsFromDi()),
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi : true },
    {provide:ErrorHandler, useClass: GlobalChunkErrorHandlerService}
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
