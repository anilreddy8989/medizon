import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-my-medicines',
  templateUrl: './my-medicines.component.html',
  styleUrls: ['./my-medicines.component.css']
})
export class MyMedicinesComponent implements OnInit {

  private medicines;
  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    //alert("This is my-medicine");
    console.log(this.apiService.getMedicines().subscribe(res => {
      //console.log(res);
      this.medicines = res;
      console.log(this.medicines[0]);
    },
    console.error
  ))
  }

}
