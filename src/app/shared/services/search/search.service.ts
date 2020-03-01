import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../../../core/interfaces/beer/beer.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private search: BehaviorSubject<string> = new BehaviorSubject('');
  currentSearch = this.search.asObservable();

  updateSearch(query: string) {
    this.search.next(query);
  };

  getCurrentSearch() {
    return this.search;
  }
}
