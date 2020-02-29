import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites = [];

  constructor() { }

  public addFavorite(brew) {
    this.favorites = [ ...this.favorites, brew ]
  }

  public removeFavorites(brew) {
    this.favorites = this.favorites.filter(favorite => favorite !== brew)
  }

}
