import { Component, OnInit } from '@angular/core'
import { BrewService } from 'src/app/shared/services/brew/brew.service'
import { FavoritesService } from 'src/app/shared/services/favorites/favorites.service';
import { Beer } from '../../core/interfaces/beer/beer.interface';
import { head, tail } from '../../shared/functions';

@Component({
  selector: 'app-all-brews-page',
  templateUrl: './all-brews-page.component.html',
  styleUrls: ['./all-brews-page.component.css']
})

export default class AllBrewsPageComponent implements OnInit {
  favorites: Array<Beer>;
  highlight: Beer | any;
  brews: Array<Beer> | any;

  constructor(
    private brewService: BrewService, 
    private favoritesService: FavoritesService,
  ) { };

  ngOnInit(): void {
    this.brewService.currentBrews.subscribe(brews => {
      this.highlight = head(brews);
      this.brews = tail(brews);
    });

    this.favoritesService.currentFavorites.subscribe(brews => {
      this.favorites = brews;
    })
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
