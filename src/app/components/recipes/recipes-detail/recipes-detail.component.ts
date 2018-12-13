import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from "../models/recipe.model";
import { RecipeMock } from "../../../mocks/recipe.mock";


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor() {
    if(this.recipe === undefined){
      this.recipe = new Recipe('','','',[]);
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('RecipesDetailComponent');
    console.log(this.recipe);
  }
}
