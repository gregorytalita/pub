import { Component } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pub';
  search = '';
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

  pageEvent: PageEvent;
  pageSize = 10;

  public handleSearch(value){
    this.search = value
  }
}
