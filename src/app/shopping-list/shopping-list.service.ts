import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanges = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  // array of ingredients
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Orange", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  // to add ingredient to the array
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

  //to update ingredient in the array
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanges.next(this.ingredients.slice()); // use slice for copy
  }

  //to remove one element in array
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanges.next(this.ingredients.slice());
  }
}
