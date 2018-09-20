import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../models/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    console.log('Recipe Component');
    console.log(this.selectedRecipe);
  }


}
