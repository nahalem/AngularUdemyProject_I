import { Recipe } from "./../components/recipes/models/recipe.model";
import { IMock } from "./mock.interface";

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
        "http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg"
      ),
      new Recipe(
        "Test Recipe 2",
        "This is simply a test 2",
        "http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg"
      ),
      new Recipe(
        "Test Recipe 3",
        "This is simply a test 3",
        "http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg"
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
