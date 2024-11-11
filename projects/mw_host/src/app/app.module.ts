import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { MainNavigationComponent } from './Components/main-navigation/main-navigation.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GlobalChunkErrorHandlerService,AuthInterceptorService } from 'mw-shared';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainNavigationComponent, AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  providers:[ 
    provideHttpClient(withInterceptorsFromDi()),  
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true},
    {provide:ErrorHandler, useClass: GlobalChunkErrorHandlerService}
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
