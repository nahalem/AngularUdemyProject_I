import { Recipe } from "./../components/recipes/models/recipe.model";
import { IMock } from "./mock.interface";
import { Ingredient } from "app/shared/models/ingredients.model";

export class RecipeMock implements IMock<Recipe> {

  private data: Recipe[] = [];

  constructor() {
    this.createMock();
  }

  private createMock(): void {
    this.data = new Array<Recipe>(
      new Recipe(
        "Test Recipe 1",
        "This is simply a test 1",
        "http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg",
        [
          new Ingredient('meat', 1),
          new Ingredient('French Fries', 20),
        ] // ingredients array
      ),
      new Recipe(
        "Test Recipe 2",
        "This is simply a test 2",
        "http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg",
        [
          new Ingredient('meat', 2),
          new Ingredient('French Fries', 30),
        ] //
      ),
      new Recipe(
        "Test Recipe 3",
        "This is simply a test 3",
        "http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg",
        [
          new Ingredient('meat', 3),
          new Ingredient('French Fries', 40),
        ] //
      )
    );
  }

  public getMockData(): Array<Recipe> {
    console.log(this.data);
    return this.data;
  }

  public addMockData(item: Recipe): void {
    if(item === null || item === undefined)
    {
      return;
    }

    this.data.push(item);
  }
}
