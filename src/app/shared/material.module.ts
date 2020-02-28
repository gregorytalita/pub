import { NgModule } from  '@angular/core'
import { MatToolbarModule } from  '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule
  ]
})

export  class  MaterialModule { }
