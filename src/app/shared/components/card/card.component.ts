import { Component, Input } from '@angular/core';
import { Beer } from '../../../core/interfaces/beer/beer.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export default class CardComponent {
  @Input('brew') brew: Beer;
  @Input('handleFavorite') handleFavorite: Function;
  @Input('isFavorite') isFavorite: Function;

}
