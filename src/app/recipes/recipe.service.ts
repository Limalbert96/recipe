import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "Sautéed Salmon With Leeks",
      " this is a test 1",
      "https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg",
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Tomatoes', 3)
      ]
    ),
    new Recipe(
      "Lemony Chicken and Spinach Soup",
      " this is a test 2",
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis",
      [new Ingredient('Chicken', 1),
      new Ingredient('Lemon', 3)]
    ),
    new Recipe(
      "Vegetarian Pizza",
      " this is a test 3",
      "https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg",
      [new Ingredient('Peppers', 3),
      new Ingredient('Pizza crust', 1)]
    )
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  AddIngToSL(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
