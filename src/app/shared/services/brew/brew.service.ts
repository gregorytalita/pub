import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../../../core/interfaces/beer/beer.interface'

@Injectable({
  providedIn: 'root'
})

export class BrewService {
  private brews = new BehaviorSubject([]);
  currentBrews = this.brews.asObservable();
  
  constructor(private http: HttpClient) { };

  getBrews(page: number = 1, query: string = '') {
    const formatedQuery = query.length > 0? `&beer_name=${query}` : '';

    return this.http.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10${formatedQuery}`);
  };

  getCurrentBrews() {
    return this.brews;
  };

  updateBrews(brews: Array<Beer>) {
    this.brews.next(brews);
  };
}
