import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[] = [
		new Ingredient('Spaghetti', 12),
		new Ingredient ('Tomato sauce', 2),
	];

  constructor() { }

  ngOnInit() {
  }

}
