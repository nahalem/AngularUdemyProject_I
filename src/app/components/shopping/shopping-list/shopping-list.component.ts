import { Component, OnInit } from '@angular/core';
import { Ingredient } from "./../../../shared/models/ingredients.model";
import { InredientsMock } from '../../../mocks/ingredients.mock';
import { ShoppingListService } from 'app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  isNewIngredient: boolean;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.isNewIngredient = false;
  }

  onIngredientAdded(ingredient: Ingredient) : void{
    //this.shoppingListService.addIngredient(ingredient);
    this.isNewIngredient = true;
  };

}
