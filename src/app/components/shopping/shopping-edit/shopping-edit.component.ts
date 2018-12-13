import { Component, OnInit } from '@angular/core';
import { Ingredient } from "./../../../shared/models/ingredients.model";
import { ShoppingListService } from 'app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string;
  ingredientAmount: number;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {

  }

  onAddItem() : void {
    let ingredient = new Ingredient(this.ingredientName,this.ingredientAmount);
    this.shoppingListService.addIngredient(ingredient);
  };

}
