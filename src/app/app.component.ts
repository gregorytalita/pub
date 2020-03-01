import { Component } from '@angular/core';
import { BrewService } from './shared/services/brew/brew.service';
import { SearchService } from './shared/services/search/search.service';
import { PaginationService } from './shared/services/pagination/pagination.service';
import { Beer } from './core/interfaces/beer/beer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})

export class AppComponent {
  title = 'pub';
  loaded = false;
  tabs = [
    {
      path: '/',
      label: 'All'
    },
    {
      path: 'favorites',
      label: 'Favorite Brews'
    }
  ];

  constructor(
    private brewService: BrewService,
    private searchService: SearchService,
    private paginationService: PaginationService
  ){}

  ngOnInit():void {
    const page = this.paginationService.currentPage;
    const searchQuery = this.searchService.search;

    this.brewService.getBrews(page, searchQuery)
      .subscribe((data: Array<Beer>) => {
        this.brewService.brews = data;
        this.loaded = true
      });
  }

  public handleSearch = (value: string): void => {
    this.searchService.search = value;

    this.brewService.getBrews(1, `&beer_name=${value}`)
  };

  public prevDisabled():boolean {
    return !this.paginationService.previousPageAvailable;
  };

  public nextDisabled():boolean {
    return !this.paginationService.nextPageAvailable;
  };
}
