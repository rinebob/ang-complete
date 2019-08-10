import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  menuOpen = false;
  ingredients = [];


  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
			  private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  openMenu() {
    this.menuOpen = !this.menuOpen
  }

	onAddToShoppingList() {
		this.recipeService.addToShoppingList(this.recipe.ingredients);
	}

	onEditRecipe(){
		this.router.navigate(['/recipes', this.id, 'edit']);
	}

}
