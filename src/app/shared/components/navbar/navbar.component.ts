import { Component, Input } from '@angular/core';
import { FunctionCall } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export default class NavbarComponent {
  @Input('tabs') tabs: Array<Object>;
  @Input('handleSearch') handleSearch: FunctionCall;

}
