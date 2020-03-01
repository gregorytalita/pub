import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../../../core/interfaces/beer/beer.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites = new BehaviorSubject([]);
  currentFavorites = this.favorites.asObservable();

  updateFavorites(brews: Array<Beer>) {
    this.favorites.next(brews);
  };

  getCurrentFavorites() {
    return this.currentFavorites
  };

}
