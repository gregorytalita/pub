import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search = '';

  constructor() { }

  public handleSearch(value){
    this.search = value
  }
}
