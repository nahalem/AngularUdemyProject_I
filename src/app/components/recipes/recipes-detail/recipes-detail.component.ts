import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from "../models/recipe.model";
import { ShoppingListService } from 'app/services/shopping-list.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
     private shoppingListService: ShoppingListService
  ) {
    if(this.recipe === undefined){
      this.recipe = new Recipe('','','',[]);
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('RecipesDetailComponent');
    console.log(this.recipe);
  }

  addIngriedientsToShoppingList(): void{
    this.shoppingListService.addIngrementsToTheRecipe(this.recipe.ingredients);
  };
}
