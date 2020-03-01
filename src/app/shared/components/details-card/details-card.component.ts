import { Component, Input } from '@angular/core';
import { Beer } from '../../../core/interfaces/beer/beer.interface';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})

export default class DetailsCardComponent {
  @Input('brew') brew: Beer;
  @Input('handleFavorite') handleFavorite: Function;
  @Input('isFavorite') isFavorite: Function;
}
