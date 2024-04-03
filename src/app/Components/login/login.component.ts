import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;
  loginform!:FormGroup;
  constructor(private formbuilder:FormBuilder, private userservice:UserService, private router:Router){}

  ngOnInit():void {
    this.loginform = this.formbuilder.group({});
  }

  logIn(){
    // console.log("hello")
    // if(this.loginform.valid){
    //   let reqData={
    //     userEmail:this.loginform.value.email,
    //     userPassword:this.loginform.value.password
    //   }
    //   this.userservice.login(reqData).subscribe((res:any)=>{
    //     console.log(res);
    //     localStorage.setItem("token",res.data);
    //     this.router.navigateByUrl("sidenav");
    //   },(error:any)=>{
    //     console.log(error)
    //   })
    // }
    // else{console.log("Invalid Inputs")}
  }
}
