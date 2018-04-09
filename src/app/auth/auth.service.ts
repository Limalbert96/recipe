import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    token: string;

    constructor(private router: Router){}

    //signup
    signupUser(email: string, password: string){
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
            response => console.log(response)
        )
        .catch(
            error => console.log(error)
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
                )
            }
        )
        .catch(
            error => console.log(error)
        );
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