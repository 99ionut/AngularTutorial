import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  //components / directives that belong to this model
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent
  ],
  //things avabile to the templates inside of this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //objects that can be injected to parts of this model
  providers: [
    provideClientHydration()
  ],
  //the entry point of this model
  bootstrap: [AppComponent]
})
export class AppModule { }
