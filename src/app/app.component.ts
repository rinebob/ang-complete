import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	loadedFeature = 'recipe';

	@Input() showRecipes: {showRecipes: boolean, showShoppingList: boolean};
	@Input() showShoppingList: {showRecipes: boolean, showShoppingList: boolean};

  title = 'ang-complete';
  name = 'Dude...';
	onNavigate(feature: string) {
		this.loadedFeature = feature;

	}

}
