import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/models/ingredients.model';
import { InredientsMock } from 'app/mocks/ingredients.mock';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  ingredientsMock: InredientsMock;
  selectedIngredients = new EventEmitter<Ingredient>();
  ingredientsChange = new EventEmitter<Ingredient[]>();

  constructor(){
    this.ingredientsMock = new InredientsMock();
    this.ingredients = this.ingredientsMock.getMockData();
  }

  getIngredients() : Ingredient[]{
    return this.ingredients.slice();
  };

  addIngredient(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  };

}
