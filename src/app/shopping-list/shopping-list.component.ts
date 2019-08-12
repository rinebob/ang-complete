import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients = [];
  ingredientAddedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientAddedSub = this.shoppingListService.ingredientAdded
    .subscribe(
        (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
            // console.log('s-l.c.ts ngOnInit. ingredients: ',ingredients)
        }
    );
  }

  onIngredientAdded() {
    this.ingredients = this.shoppingListService.getIngredients();
    // console.log("s-l.c.ts iAdded. ingredients: ", this.ingredients);
  }

  ngOnDestroy(): void {
    this.ingredientAddedSub.unsubscribe();
  }

}
