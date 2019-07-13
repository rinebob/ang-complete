import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('A Test Recipe Dude', 'Hey it tastes really good!', 'https://coastguard.dodlive.mil/files/2014/11/photo-1.jpg'),

		new Recipe('Yo Hey Food Here', 'Man Im hungry dude!', 'https://coastguard.dodlive.mil/files/2014/11/photo-1.jpg'),

		new Recipe('Like Test Recipe Three Dude', 'Oh not this same sht over again right?!', 'https://coastguard.dodlive.mil/files/2014/11/photo-1.jpg'),
	];

  constructor() { }

  ngOnInit() {
  }

}
