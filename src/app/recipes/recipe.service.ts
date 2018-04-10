import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()

export class RecipeService {

  recipesChanges = new Subject<Recipe[]>();

  // dummy default recipes
  private recipes: Recipe[] = [
    new Recipe(
      "Sautéed Salmon With Leeks",
      `Here is a fresh and simple way to prepare salmon that is ready in about 20 minutes.\n 
      Most of that time will be spent preparing the vegetables. 
      You do have to blanch, core and chop the tomatoes, 
      but that is quick work (and we won't tell if you use the canned, diced sort. 
      Just drain first.). Once that's done, sauté the fish and set aside. 
      Throw tomatoes, leeks, lemon juice and freshly ground pepper into the pan and sauté for a quick minute. 
      Spoon over the fish and serve.`,
      "https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg",
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Tomatoes', 3),
        new Ingredient('Leeks', 2),
        new Ingredient('Lemon juice', 1),
        new Ingredient('Ground pepper', 4)
      ]
    ),
    new Recipe(
      "Lemony Chicken and Spinach Soup",
      `Inspired by Greek avgolemono, this recipe yields a creamy, comforting, 
      bright bowl of soup that delivers everything we want when feeling a little under the weather. 
      Heck, served with a warm blanket and a cozy couch, 
      we’re convinced this lemony chicken soup can fix just about anything.`,
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis",
      [new Ingredient('Chicken', 1),
      new Ingredient('Lemon', 3),
      new Ingredient('Eggs', 2)]
    ),
    new Recipe(
      "Vegetarian Pizza",
      `Made With Condensed Celery Soup
      Who doesn't love pizza? 
      This vegetarian one has a deliciously unique creamy topping that is packed with great tasting veggies`,
      "https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg",
      [new Ingredient('Peppers', 3),
      new Ingredient('Pizza base', 1),
      new Ingredient('Campbell\'s Condensed Cream of Celery', 1),
      new Ingredient('Mozzarella cheese (grated)', 1)]
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

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanges.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanges.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes; // set recipes with new recipes array
    this.recipesChanges.next(this.recipes.slice()); // pass updated recipes
  }
}
