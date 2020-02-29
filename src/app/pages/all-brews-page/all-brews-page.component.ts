import { Component, OnInit } from '@angular/core'

export interface Tile {
  cols: number
  rows: number
}
@Component({
  selector: 'app-all-brews-page',
  templateUrl: './all-brews-page.component.html',
  styleUrls: ['./all-brews-page.component.css']
})

export default class AllBrewsPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  selectedTile: { cols: 1, rows: 3 }
  tiles: Tile[] = [
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
  ]

}
