import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from  '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from './shared/shared.module'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AllBrewsPageComponent, FavoritePageComponent } from './pages'

const  appRoutes:  Routes  = [
  { path:  'all', component:  AllBrewsPageComponent },
  { path:  'favorites', component:  FavoritePageComponent },
  { 
    path:  '',
    redirectTo:  '/all',
    pathMatch:  'full'
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AllBrewsPageComponent,
    FavoritePageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
