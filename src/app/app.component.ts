import { Component } from '@angular/core';
import { SearchService } from './shared/services/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  constructor(private searchService: SearchService){};

  handleSearch = (value: string): void => {
    this.searchService.updateSearch(value);
  };
}
