import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model'; //manage array of recipes
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute) { 

  } //inject data

  ngOnInit() {

    // update the list if there are changes on the recipe
    this.subscription =  this.recipeService.recipesChanges.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes(); //get copy
  }

  // create new recipe
  onNewRecipe(){ 
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // to prevent leak
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
