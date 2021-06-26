import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username_password=["prakash:prakash@123","admin:admin@123","someone:someone@123"];
  errorMessage="";
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.errorMessage="";
    let formdata = f.value;
    
    let login=false;
    this.username_password.forEach((data)=>{
      let value= data.split(':');
      if (value[0] == formdata["username"] && value[1] == formdata["password"]){
        login = true;
      }
    })
   

    if (login){
      sessionStorage.setItem("loggedIn","true");
      
      if(sessionStorage.getItem("location")?.indexOf("logout")== -1){
        let location=sessionStorage.getItem("location")?sessionStorage.getItem("location"):"none";
        window.location.href = location? location : "none";
      }else{
        this.route.navigateByUrl('/search');
      }
     
    }else{
      this.errorMessage = "Unauthorized User";
    }
  }

}
