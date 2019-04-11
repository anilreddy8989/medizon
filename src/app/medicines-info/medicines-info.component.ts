import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-medicines-info',
  templateUrl: './medicines-info.component.html',
  styleUrls: ['./medicines-info.component.css']
})
export class MedicinesInfoComponent implements OnInit {

  public medicineId:any;
  public medicineDetails;
  KEY = 'CART';
  value: any = null;
  cartItems:any = [];

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    public local: LocalStorageService, public session: SessionStorageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.medicineId = params.get("id")
    })
    this.apiService.apiMedicine(this.medicineId).subscribe(res =>{
      console.log(res);
      this.medicineDetails=res;
      //this.cartItems.push(this.medicineDetails);
    })
  }
  
  addToCart() {
    ///this.cartItems.push(this.medicineDetails);
    if(this.local.get(this.KEY) !=null){
      this.cartItems = this.local.get(this.KEY);
      this.cartItems.push(this.medicineDetails);
      this.local.set(this.KEY, this.cartItems);
    }
   else{
    this.cartItems.push(this.medicineDetails);
    this.local.set(this.KEY, this.cartItems);
   }
  }
}
