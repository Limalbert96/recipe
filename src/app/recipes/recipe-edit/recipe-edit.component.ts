import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=> {
        this.id = +params['id'];
        // check if id exist, undefined/ false => new recipe
        this.editMode = params['id'] != null; //check if params have id
        
        // check which mode
        console.log(this.editMode);
      }
    );
  }

}
