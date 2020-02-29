import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from './shared/shared.module'
import { NgModule } from '@angular/core'

import routes from './core/routing/routing.config'
import { AppComponent } from './app.component'
import { AllBrewsPageComponent, FavoritePageComponent } from './pages'
@NgModule({
  declarations: [
    AppComponent,
    AllBrewsPageComponent, 
    FavoritePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
