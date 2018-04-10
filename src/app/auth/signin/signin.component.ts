import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
//import { ToasterService } from '../../toaster.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
    //private toasterService: ToasterService
  ) { 

  }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    //test input
    //const all = form.value;
    //console.log(all);

    this.authService.signinUser(email, password);
    
    /*
    if(this.authService.getSuccessMsg() != null){
      this.toasterService.Success("Success", this.authService.getSuccessMsg());
    }else{
    this.toasterService.Error("Fail", this.authService.getErrMsg());
    }*/
  }
}
