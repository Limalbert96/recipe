import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanges = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Orange", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanges.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    //for(let ingredient of ingredients){
    //    this.addIngredient(ingredient);
    //}

    this.ingredients.push(...ingredients); //array to list with spread operator
    this.ingredientsChanges.emit(this.ingredients.slice());
  }
}
