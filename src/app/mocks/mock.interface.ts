export interface IMock<T>{
  getMockData(): Array<T>;
  addMockData(item: T): void;
}
