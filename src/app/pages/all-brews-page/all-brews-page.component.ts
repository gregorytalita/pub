import { Component, OnInit } from '@angular/core'
import { BrewService } from 'src/app/shared/services/brew/brew.service'
import { FavoritesService } from 'src/app/shared/services/favorites/favorites.service';
import { PaginationService } from '../../shared/services/pagination/pagination.service';
import { Beer } from '../../core/interfaces/beer/beer.interface';
import { head, tail } from '../../shared/functions';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-all-brews-page',
  templateUrl: './all-brews-page.component.html',
  styleUrls: ['./all-brews-page.component.css']
})

export default class AllBrewsPageComponent implements OnInit {
  searchQuery: string;
  currentPage: number = 1;
  favorites: Array<Beer> = [];
  highlight: Beer | any;
  brews: Array<Beer> | any;

  constructor(
    private brewService: BrewService, 
    private searchService: SearchService,
    private favoritesService: FavoritesService,
    private paginationService: PaginationService
  ) { };

  ngOnInit() {
    this.favoritesService.currentFavorites.subscribe(page => {
      this.favorites = page;
    });

    this.searchService.currentSearch.subscribe(searchQuery => {
      this.searchQuery = searchQuery;
      this.currentPage = 1;
      this.handleBrews();
    });

    this.paginationService.currentPage.subscribe(page => {
      this.currentPage = page;
      this.handleBrews();
    });
  };

  handleBrews = () => {
    this.brewService.getBrews(this.currentPage, this.searchQuery)
      .subscribe((data: Array<Beer>) => { 
        this.highlight = head(data);
        this.brews = tail(data);
      });

    this.brewService.getBrews(this.currentPage + 1, this.searchQuery)
      .subscribe((data: Array<Beer>) => {
        this.paginationService.nextPageAvailable = data.length > 0
      });
  }

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

  isFavorite = (brew: Beer): boolean => {
    return this.favorites.includes(brew);
  };

  prevDisabled = (): boolean => {
    return !(this.currentPage > 1);
  };

  nextDisabled = (): boolean => {
    return !this.paginationService.nextPageAvailable;
  };

  handleChange = (value: number): void => {
    const newPage = this.currentPage + value;
    this.paginationService.updatePage(newPage);
  };
}
