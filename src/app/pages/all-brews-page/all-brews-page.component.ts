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
  highlight: Beer | any;
  brews: Array<Beer> | any;

  constructor(
    private brewService: BrewService, 
    private favoritesService: FavoritesService,
  ) { };

  ngOnInit(): void {
    this.highlight = head(this.brewService.brews);
    this.brews = tail(this.brewService.brews);
  };

  handleFavorite = (brew: Beer): void => {
    this.isFavorite(brew)
    ? this.favoritesService.removeFavorite(brew)
    : this.favoritesService.addFavorite(brew);
  };

  isFavorite = (brew: Beer): boolean => {
    return this.favoritesService.isFavorite(brew);
  };
}
