import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'mdb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {  
  loadedFeature ='recipe';
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCNM2noQDWeg2rm_vHPGNACjN4rKXOpFdk",
      authDomain: "recipe-fc7f8.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
