import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private recipeService: RecipeService) { // inject recipeName

   }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=> {
        this.id = +params['id']; // + will parse string to number
        // check if id exist, undefined/ false => new recipe
        this.editMode = params['id'] != null; //check if params have id

        this.initForm(); // when page reload call the form func 
        
        // check which mode
        console.log(this.editMode);
      }
    );
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  private initForm(){
    
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      
      //check if ingredients is empty
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount' : new FormControl(ingredient.amount, [
                Validators.required,
                // regex to validate digit, no negative input
                Validators.pattern(/^[1-9]+[0-9]*$/) 
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImagePath, Validators.required),
      'description' : new FormControl(recipeDescription, Validators.required),
      'ingredients' : recipeIngredients
    });
  }

}
