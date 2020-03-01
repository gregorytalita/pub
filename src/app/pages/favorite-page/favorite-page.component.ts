import { Component } from '@angular/core';
import { head, tail } from '../../shared/functions';
import { FavoritesService } from 'src/app/shared/services/favorites/favorites.service';
import { Beer } from '../../core/interfaces/beer/beer.interface';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})

export default class FavoritePageComponent {
  favorites: Array<Beer>;
  highlight: Beer | any;
  brews: Beer | any;

  constructor(private favoritesService: FavoritesService){};

  ngOnInit(): void {
    this.favoritesService.currentFavorites.subscribe(favorites => {
      this.favorites = favorites;
      this.highlight = head(favorites);
      this.brews = tail(favorites);
    });
  };

  handleFavorite = (brew: Beer): void => {
    this.isFavorite(brew)
    ? this.removeFavorite(brew)
    : this.addFavorite(brew);
  };

  addFavorite(brew: Beer): void {
    this.favoritesService.updateFavorites([ ...this.favorites, brew ]);
  };

  removeFavorite(brew: Beer): void {
    const filteredFavorites = this.favorites.filter(favorite => favorite !== brew);
    this.favoritesService.updateFavorites(filteredFavorites);
  };

  isFavorite = (brew): boolean => {
    return this.favorites.includes(brew);
  }
}
