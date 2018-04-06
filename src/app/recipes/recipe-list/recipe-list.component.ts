import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'; //manage array of recipes
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute) { 

  } //inject data

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); //get copy
  }

  onNewRecipe(){ 
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
