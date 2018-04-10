import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
//import { ToasterService } from '../../toaster.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
    //private toasterService: ToasterService
  ) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    //test input
    //const all = form.value;
    //console.log(all);

    this.authService.signupUser(email, password);
    /*
    if(this.authService.getSuccessMsg() != null){
      this.toasterService.Success("Success", this.authService.getSuccessMsg());
    }else{
    this.toasterService.Error("Fail", this.authService.getErrMsg());
    }*/
    

    
  }

}
