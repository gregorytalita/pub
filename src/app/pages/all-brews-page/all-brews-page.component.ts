import { Component, OnInit } from '@angular/core'
import { BrewService } from '../../core/services/brew.service'
import { head, tail } from '../../shared/functions'

@Component({
  selector: 'app-all-brews-page',
  templateUrl: './all-brews-page.component.html',
  styleUrls: ['./all-brews-page.component.css']
})

export default class AllBrewsPageComponent implements OnInit {
  highlight;
  brews;
  
  constructor(private brewService: BrewService) { }

  ngOnInit(): void {
    this.brewService.getBrews()
    .subscribe((data: [any]) => {
      this.highlight = head(data)
      this.brews = tail(data)
    })
  }

  updateHighlight(selectedBrew): void {
    const filteredBrews = this.brews.filter(brew => brew !== selectedBrew)
    const selected = this.brews.filter(brew => brew === selectedBrew)

    this.brews = [ ...filteredBrews, this.highlight ]
    this.highlight = selected
  }
}
