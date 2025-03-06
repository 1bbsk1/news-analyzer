export default class SearchInput {
  private _searchInputElement: HTMLInputElement;

  constructor(searchInputElement: HTMLInputElement) {
    this._searchInputElement = searchInputElement;
  }

  public fetchQuery(): string {
    return this._searchInputElement.value;
  }
}
