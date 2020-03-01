import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Beer } from '../../../core/interfaces/beer/beer.interface'

@Injectable({
  providedIn: 'root'
})

export class BrewService {
  brews: Array<Beer> = []

  constructor(private http: HttpClient) { }

  getBrews(page: number = 1, query: string = '') {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10${query}`);
  }

  nextPageAvailable(page: number = 1) {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=${page}`)
      .subscribe(response => response);
  }
}
