import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-medicines-info',
  templateUrl: './medicines-info.component.html',
  styleUrls: ['./medicines-info.component.css']
})
export class MedicinesInfoComponent implements OnInit {

  public medicineId:any;
  public medicineDetails;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.medicineId = params.get("id")
    })
    this.apiService.apiMedicine(this.medicineId).subscribe(res =>{
      console.log(res);
      this.medicineDetails=res;
    })
  }
  

}
