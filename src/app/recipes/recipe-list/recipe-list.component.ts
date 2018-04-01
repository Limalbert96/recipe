import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'; //manage array of recipes

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', ' this is a test 1', 'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
    new Recipe('Recipe 2', ' this is a test 2', 'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
    new Recipe('Recipe 3', ' this is a test 3', 'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
    new Recipe('Recipe 4', ' this is a test 4', 'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
    new Recipe('Recipe 5', ' this is a test 5', 'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
