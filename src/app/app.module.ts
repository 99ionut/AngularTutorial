import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //components / directives that belong to this model
  declarations: [
    AppComponent
  ],
  //things avabile to the templates inside of this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //objects that can be injected to parts of this model
  providers: [
    provideClientHydration()
  ],
  //the entry point of this model
  bootstrap: [AppComponent]
})
export class AppModule { }
