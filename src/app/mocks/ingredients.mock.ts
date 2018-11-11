import { Ingredient } from "./../shared/models/ingredients.model";
import { IMock } from "./mock.interface";

export class InredientsMock implements IMock<Ingredient> {

  private data: Ingredient[] = [];

  constructor() {
    this.createMock();
  }

  private createMock(): void {
    this.data = new Array<Ingredient>(
      new Ingredient('Apples', 200),
      new Ingredient('Tomatoes', 300),
      new Ingredient('Potatoes', 400),
      new Ingredient('Cherries', 500),
    );
  }

  public getMockData(): Array<Ingredient> {
    console.log('InredientsMock:');
    console.log(this.data);
    return this.data;
  }

  public addMockData(item: Ingredient): void {
    if(item === null || item === undefined)
    {
      return;
    }

    this.data.push(item);
  }
}
