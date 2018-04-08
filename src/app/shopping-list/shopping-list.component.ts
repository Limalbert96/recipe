import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";


@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    
    //subscribe to the subject in shopping list service
    this.subscription = this.slService.ingredientsChanges.subscribe( 
      (ingredients: Ingredient[]) => {
        this.ingredients =ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index); 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); //prevent memory leaks
  }

}
 