import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from  './material.module';
import { RouterModule } from '@angular/router';

import { 
  NavbarComponent,
  SearchComponent,
  TabsComponent,
  CardComponent,
  PaginationComponent,
  DetailsCardComponent 
} from './components';

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
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarComponent,
    SearchComponent,
    TabsComponent,
    CardComponent,
    PaginationComponent,
    DetailsCardComponent,
  ]
})

export class SharedModule { }
