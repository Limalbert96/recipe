import { Component } from "@angular/core";
import { Response } from "@angular/http";

import { DataService } from "../shared/data.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  //public isRecipe: boolean = true;

  constructor(
    private dataService: DataService,
    private authService: AuthService){
    }

  // save and send data to firebase
  onSaveData(){
    this.dataService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  //get data from firebase
  onFetchData(){
    this.dataService.getRecipes();
  }

  //logout
  onLogout(){
    this.authService.logout();
  }
}
