import { Component, OnInit } from '@angular/core';
import { BrewService } from './shared/services/brew/brew.service';
import { SearchService } from './shared/services/search/search.service';
import { PaginationService } from './shared/services/pagination/pagination.service';
import { Beer } from './core/interfaces/beer/beer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
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
    this.loadContent();
  }

  loadContent() {
    const page = this.paginationService.currentPage;
    const searchQuery = this.searchService.search;
  
    this.brewService.getBrews(page, searchQuery)
      .subscribe((data: Array<Beer>) => { 
        this.brewService.updateBrews(data)
        this.loaded = true;
      });

    this.brewService.getBrews(page + 1, searchQuery)
      .subscribe((data: Array<Beer>) => {
        this.paginationService.nextPageAvailable = data.length > 0
      });
  }

  handleSearch = (value: string): void => {
    this.searchService.search = value.length > 0? `&beer_name=${value}` : '';
    this.loadContent();
  };

  prevDisabled = (): boolean => {
    return !this.paginationService.previousPageAvailable;
  };

  nextDisabled = (): boolean => {
    return !this.paginationService.nextPageAvailable;
  };

  handleChange = (value: number): void => {
    this.paginationService.currentPage +=  value
  }
}
