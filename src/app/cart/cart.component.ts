import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public sessionDetails;
  KEY = 'CART';
  counter: number = 1;
  public updatedPrice:number;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    public local: LocalStorageService, public session: SessionStorageService,
    private router: Router) { }

  ngOnInit() {
    this.counter =1;
    this.sessionDetails = this.local.get(this.KEY);
    console.log(this.sessionDetails);
    this.updatedPrice =this.sessionDetails.price;
  }

  inc(i){
    this.counter =this.counter+1;
    this.sessionDetails[i].name= this.counter;
    //alert(this.counter);
    //this.sessionDetails[i]
    //this.updatedPrice = this.sessionDetails.price*this.counter;
  }

  dec(i){
    if(this.counter > 1){
    this.counter =this.counter-1;
    this.sessionDetails[i].name= this.counter;
    //alert(this.counter);
    //this.updatedPrice = this.sessionDetails.price*this.counter;
    }
  }

  updateCartToCheckout(){
    this.sessionDetails.price = this.updatedPrice;
    this.local.set(this.KEY, this.sessionDetails);
    this.router.navigate(['/checkout']);
  }

}
