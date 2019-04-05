import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMedicinesComponent } from '../app/my-medicines/my-medicines.component';
import { SignComponent } from '../app/sign/sign.component';
import { MedicinesComponent } from '../app/medicines/medicines.component';
import { FeaturesComponent } from '../app/features/features.component';
import { SupportComponent } from '../app/support/support.component';
import { CartComponent } from '../app/cart/cart.component';


const routes: Routes = [
  { path: '', component: MyMedicinesComponent },
  { path: 'signin', component: SignComponent },
  { path: 'medicines', component: MedicinesComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'support', component: SupportComponent},
  { path: 'cart', component: CartComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
