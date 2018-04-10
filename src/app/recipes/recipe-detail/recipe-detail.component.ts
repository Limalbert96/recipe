import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

// inject toaster as service
import { ToasterService } from '../../toaster.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  
  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute, 
    private router: Router,
    private toasterService: ToasterService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // + will parse string to number
        this.id = +params['id']; 
        
        //get detail by index in array
        this.recipe = this.recipeService.getRecipe(this.id); 
      }
    );
  }

  // adding ingredients to shopping list
  onAddToSL(){
    this.recipeService.AddIngToSL(this.recipe.ingredients);
    this.toasterService.Info("Success Adding ingredients to Shopping List");
  }

  // edit recipes
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  //delete recipes
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
