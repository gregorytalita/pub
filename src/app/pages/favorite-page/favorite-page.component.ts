import { Component, Input } from '@angular/core';
import { head, tail } from '../../shared/functions';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export default class FavoritePageComponent {
  @Input('favorites') favorites: Array<Object>;
  highlight;
  brews;

  ngOnInit(): void {
    this.highlight = head(this.favorites)
    this.brews = tail(this.favorites)
  }
}
