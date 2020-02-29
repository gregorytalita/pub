import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export default class FavoritePageComponent {
  @Input('favorites') favorites;

}
