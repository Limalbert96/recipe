import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToasterService } from '../toaster.service';

@Injectable()
export class AuthService{
    token: string;
    errMsg: any
    successMsg: any

    constructor(private router: Router,
        private toasterService: ToasterService){}

    //signup
    signupUser(email: string, password: string){
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log(response)

                // send toaster msg
                this.errMsg = null;
                this.successMsg = response;
                console.log(this.successMsg);
                this.toasterService.Success("Success", this.getSuccessMsg());
            }
        )
        .catch(
            error => {
                console.log(error);

                // send toaster msg
                this.successMsg = null;
                this.errMsg = error.message;                
                console.log(this.errMsg);
                this.toasterService.Error("Fail", this.getErrMsg());
            }
        )
    }

    

    //signin
    signinUser(email: string, password: string){
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            _response => {
                this.router.navigate(['recipes']);
                firebase.auth().currentUser.getToken() //reset token
                .then(
                    (token: string) => this.token = token
                );
                console.log(_response)

                // send toaster msg
                this.errMsg = null;
                this.successMsg = _response;
                console.log(this.successMsg);
                this.toasterService.Success("Success", this.getSuccessMsg());
            }
            
        )
        .catch(
            error => {
                console.log(error);

                // send toaster msg
                this.successMsg = null;
                this.errMsg = error.message;
                console.log(this.errMsg);
                this.toasterService.Error("Fail", this.getErrMsg());
            }
        );
    }

    getErrMsg(){
        return this.errMsg;
    }
    
    getSuccessMsg(){
        return this.successMsg;
    }

    //logout
    logout(){
        firebase.auth()
        .signOut()
        .then(
            _response => {
                this.router.navigate(['/']);
            }
        );
        this.token = null;
    }

    //return token
    getToken(){
        firebase.auth().currentUser.getToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    // check token authentication
    isAuthenticated(){
        return this.token != null;
    }
}