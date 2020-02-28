import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from  './material.module'

import { 
  NavbarComponent,
  SearchComponent,
  TabsComponent,
  CardComponent,
  PaginationComponent,
  DetailsCardComponent 
} from './components'

@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    TabsComponent,
    CardComponent,
    PaginationComponent,
    DetailsCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    SearchComponent,
    TabsComponent,
    CardComponent,
    PaginationComponent,
    DetailsCardComponent,
  ]
})

export class SharedModule { }
