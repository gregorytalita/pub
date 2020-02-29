import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export default class TabsComponent {
  @Input('tabs') tabs: Array<Object>;
  activeTab: String;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.activeTab = this.router.url;
  }
}
