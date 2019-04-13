import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

grand_total: number;

  constructor(
    public local: LocalStorageService, public session: SessionStorageService
  ) { }

  ngOnInit() {
    this.grand_total = this.local.get('TOTAL_PRICE');
  }

}
