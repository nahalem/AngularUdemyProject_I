import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'app/components/recipes/models/recipe.model';
import { RecipeMock } from 'app/mocks/recipe.mock';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  recipeMock: RecipeMock;
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
    this.recipeMock = new RecipeMock();
    this.recipes = this.recipeMock.getMockData();
  }

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }

}
