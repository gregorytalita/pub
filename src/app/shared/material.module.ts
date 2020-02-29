import { NgModule } from  '@angular/core'
import { MatToolbarModule } from  '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatTabsModule } from '@angular/material/tabs'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule
  ]
})

export  class  MaterialModule { }
