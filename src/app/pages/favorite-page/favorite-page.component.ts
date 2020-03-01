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
  highlight: Beer | any;
  brews: Beer | any;

  constructor(private favoritesService: FavoritesService){};

  ngOnInit(): void {
    const favorties = this.favoritesService.favorites;

    this.highlight = head(favorties);
    this.brews = tail(favorties);
  };

  handleFavorite = (brew): void => {
    this.isFavorite(brew)
    ? this.favoritesService.removeFavorite(brew)
    : this.favoritesService.addFavorite(brew);
  };

  isFavorite = (brew: Beer): boolean => {
    return this.favoritesService.isFavorite(brew);
  };
}
