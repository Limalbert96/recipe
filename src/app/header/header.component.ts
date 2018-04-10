import { Component } from "@angular/core";
import { Response } from "@angular/http";

import { DataService } from "../shared/data.service";
import { AuthService } from "../auth/auth.service";
import { ToasterService } from "../toaster.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  //public isRecipe: boolean = true;

  constructor(
    private dataService: DataService,
    public authService: AuthService,
    private toasterService: ToasterService){ //should be private, but bug
    }

  // save and send data to firebase
  onSaveData(){
    this.dataService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
    this.toasterService.Success("Success", "Successfully save the current data!");
  }

  //get data from firebase
  onFetchData(){
    this.dataService.getRecipes();
    this.toasterService.Success("Success", "Successfully load previous saved data!");
  }

  //logout
  onLogout(){
    this.authService.logout();
    this.toasterService.Success("Success", "Successfully logout!");
  }
}
