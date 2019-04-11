import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  public semail:string;
  public spassword:string;

  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.semail=this.spassword=null;
  }

  userSignIn() {
    
    this.apiService.apiGetUser(this.semail).subscribe(res => {
      //console.log(res);
      //this.semail = res;
      if(res == null){
        alert("Please Enter Correct Email or Password");
      }else{
        this.router.navigate(['']);
      }
    })
  }

}
