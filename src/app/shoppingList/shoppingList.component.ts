import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../ingredient/ingredient.model';

@Component({
  selector: 'app-shoppingList',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
