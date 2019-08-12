
import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {

  ingredientAdded = new Subject<Ingredient[]>();


  private ingredients: Ingredient[] = [
		new Ingredient('Spaghetti', 12),
		new Ingredient ('Tomato sauce', 2),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
    // console.log('s-l.s.ts addIng.  newIngredient: ',ingredient)
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }


}
