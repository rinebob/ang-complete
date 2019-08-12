import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('A Test Recipe Dude', 'Hey it tastes really good!', 'https://coastguard.dodlive.mil/files/2014/11/photo-1.jpg', [
			new Ingredient('bread', 2),
			new Ingredient ('meat', 2)
	]),

	new Recipe('Yo Hey Food Here', 'Man Im hungry dude!', 'https://coastguard.dodlive.mil/files/2014/11/photo-1.jpg', [
		new Ingredient('hot dogs', 2),
		new Ingredient ('buns', 2)
	]),

	new Recipe('Like Test Recipe Three Dude', 'Oh not this same sht over again right?!', 'https://coastguard.dodlive.mil/files/2014/11/photo-1.jpg', [
		new Ingredient('chips', 2),
		new Ingredient ('salsa', 2)
	]),
	];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
