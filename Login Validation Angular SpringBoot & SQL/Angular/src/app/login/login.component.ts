import { Component,OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any = {}
  getData : boolean ;

  constructor(private userservice : UserserviceService, private router: Router) {}

  ngOnInit() {
  }

  loginUser(){
    var user = this.model.username;
    var password = this.model.password;

    this.userservice.getUserData(user,password).subscribe((res:boolean)=> {
    
      this.getData =res ;

      if(this.getData == true) {
        this.router.navigate(["/home"]);
      }

    })
  }
  }

  

