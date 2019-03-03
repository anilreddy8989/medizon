import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMedicinesComponent } from './my-medicines/my-medicines.component';
import { SignComponent } from './sign/sign.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { FeaturesComponent } from './features/features.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMedicinesComponent,
    SignComponent,
    MedicinesComponent,
    FeaturesComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
