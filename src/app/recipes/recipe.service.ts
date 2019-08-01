import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  sendToShoppingList = new EventEmitter<Ingredient[]>();

  // recipe = Recipe;
  ingredients = [];

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

  getRecipes() {
    // console.log('recipe service.  recipes: ',this.recipes)
    return this.recipes.slice();
  }

  addToShoppingList(name) {
    const recipe = this.recipes.filter( recipe =>  recipe.name === name )
    console.log('recipe.s.ts addToList.  recipe[0]: ',recipe[0]);
    this.ingredients = recipe[0].ingredients;
    this.ingredients.forEach( ingredient => console.log(ingredient));
    this.sendToShoppingList.emit(this.ingredients);
}

}
