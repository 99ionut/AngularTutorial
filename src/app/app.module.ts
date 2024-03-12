import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WishModule } from './wish/wish.module';

@NgModule({
  //components / directives that belong to this model
  declarations: [
    AppComponent
  ],
  //things avabile to the templates inside of this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    WishModule
  ],
  //objects that can be injected to parts of this model
  providers: [
    provideClientHydration()
  ],
  //the entry point of this model
  bootstrap: [AppComponent]
})
export class AppModule { }
