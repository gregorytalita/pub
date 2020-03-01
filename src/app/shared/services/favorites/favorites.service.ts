import { Injectable } from '@angular/core';
import { Beer } from '../../../core/interfaces/beer/beer.interface'

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: Array<Beer> = [];

  addFavorite(brew: Beer): void {
    this.favorites = [ ...this.favorites, brew ];
  }

  removeFavorite(brew: Beer): void {
    this.favorites = this.favorites.filter(favorite => favorite !== brew);
  }

  isFavorite(brew): boolean {
    return this.favorites.includes(brew);
  }
}
