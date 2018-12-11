import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../models/recipe.model";
import { RecipeService } from 'app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
        console.log('RecipesComponent ->  ngOnInit()');
        console.log(this.selectedRecipe);
      }
    );
  }

}
