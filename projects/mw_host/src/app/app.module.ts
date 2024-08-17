import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { MainNavigationComponent } from './Components/main-navigation/main-navigation.component';


@NgModule({
  declarations: [MainNavigationComponent, AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
