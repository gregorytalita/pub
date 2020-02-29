import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
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

  public handleSearch(value){
    this.search = value
  }
}
