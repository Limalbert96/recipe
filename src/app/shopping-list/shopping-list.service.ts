import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanges = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Orange", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    //for(let ingredient of ingredients){
    //    this.addIngredient(ingredient);
    //}

    this.ingredients.push(...ingredients); //array to list with spread operator
    this.ingredientsChanges.next(this.ingredients.slice());
  }
}
