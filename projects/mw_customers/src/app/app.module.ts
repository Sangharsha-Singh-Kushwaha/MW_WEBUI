import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalChunkErrorHandlerService } from 'mw-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers:[
    {provide:ErrorHandler, useClass: GlobalChunkErrorHandlerService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
