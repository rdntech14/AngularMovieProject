import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactComponent } from './componenets/contact/contact.component';
import { ViewcartComponent } from './componenets/viewcart/viewcart.component';
import { HomeComponent } from './componenets/home/home.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule} from '@angular/common/http'
import { PopularComponent } from './componenets/popular/popular.component';
import { DocumentaryComponent } from './componenets/documentary/documentary.component';
import { AnimatedComponent } from './componenets/animated/animated.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ViewcartComponent,
    HomeComponent,
    PopularComponent,
    AnimatedComponent,
    DocumentaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
