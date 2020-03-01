import { Injectable } from '@angular/core';
import { Beer } from '../../../core/interfaces/beer/beer.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search: string = '';

  public handleSearch(value: string): void{
    this.search = value
  }

  public filterDescription(brews: Array<Beer>): Array<Beer> {
    return brews.filter(({ description }) => description.includes(this.search))
  }
}
