import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export default class PaginationComponent {
  @Input('prevDisabled') prevDisabled: boolean;
  @Input('nextDisabled') nextDisabled: boolean;
  @Input('handleChange') handleChange: Function;
}
