import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMedicinesComponent } from './my-medicines/my-medicines.component';
import { SignComponent } from './sign/sign.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { FeaturesComponent } from './features/features.component';
import { SupportComponent } from './support/support.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMedicinesComponent,
    SignComponent,
    MedicinesComponent,
    FeaturesComponent,
    SupportComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
