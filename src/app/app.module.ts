import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UnderNavbarComponent } from './under-navbar/under-navbar.component';
import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';
import { QuoteComponent } from './quote/quote.component';
import { UnderQuoteComponent } from './under-quote/under-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderNavbarComponent,
    MainComponent,
    RightComponent,
    QuoteComponent,
    UnderQuoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
