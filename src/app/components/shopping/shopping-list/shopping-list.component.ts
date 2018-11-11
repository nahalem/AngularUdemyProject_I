import { Component, OnInit } from '@angular/core';
import { Ingredient } from "./../../../shared/models/ingredients.model";
import { InredientsMock } from '../../../mocks/ingredients.mock';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  ingredientsMock: InredientsMock;
  isNewIngredient: boolean;

  constructor() {
    this.ingredientsMock = new InredientsMock();
    this.ingredients = this.ingredientsMock.getMockData();
  }

  ngOnInit() {
    this.isNewIngredient = false;
  }

  onIngredientAdded(ingredient: Ingredient) : void{
    this.ingredients.push(ingredient);
    this.isNewIngredient = true;
  };

}
