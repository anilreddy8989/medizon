import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-my-medicines',
  templateUrl: './my-medicines.component.html',
  styleUrls: ['./my-medicines.component.css']
})
export class MyMedicinesComponent implements OnInit {

  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    alert("This is my-medicine");
    console.log(this.apiService.getCustomers().subscribe(res => {
      console.log(res);
    },
    console.error
  ))
  }

}
