import { RecipeService } from './../recipes/recipe.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';


@Injectable()
export class ShoppingListService {

  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
		new Ingredient('Spaghetti', 12),
		new Ingredient ('Tomato sauce', 2),
  ];

  constructor(private recipeService: RecipeService) {}

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
    // console.log('s-l.s.ts addIng.  newIngredient: ',ingredient)
  }
  updateShoppingList() {
    this.recipeService.sendToShoppingList
    .subscribe(
      (ingredients: Ingredient[]) => {
            ingredients.forEach( ingredient => this.ingredients.push(ingredient));
          }
    );
  }
}
