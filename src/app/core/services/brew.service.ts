import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class BrewService {

  constructor(private http: HttpClient) { }

  getBrews(page: number = 1, query: string = '') {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10${query}`);
  }
}
