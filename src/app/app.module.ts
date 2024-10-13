import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobilecardComponent } from './shared/component/mobilecard/mobilecard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
