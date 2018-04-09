import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataService {
  constructor(
    private http: Http, 
    private recipeService: RecipeService,
    private authService: AuthService) {

    }

  //store data to firebase
  storeRecipes() {
    const token = this.authService.getToken();

      return this.http.put('https://recipe-fc7f8.firebaseio.com/recipes.json?auth=' + token, 
      this.recipeService.getRecipes());
  }

  // get recipes from firebase
  getRecipes(){
      const token = this.authService.getToken();

      this.http.get('https://recipe-fc7f8.firebaseio.com/recipes.json?auth=' + token)
      .map(
          (response: Response) => {
            const recipes: Recipe[] = response.json();

            // ensure all recipe have the ingredients property
            for (let recipe of recipes){
                if(!recipe['ingredients']){ //if ingredients doesn't exist
                    console.log(recipe);
                    recipe['ingredients'] = []; // edit
                } 
            }
            return recipes;
          }
      )
      .subscribe(
          (recipes: Recipe[]) =>{              
              this.recipeService.setRecipes(recipes);
          }
      );
  }
}
