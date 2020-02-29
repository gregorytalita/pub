import { Routes } from '@angular/router'
import { AllBrewsPageComponent, FavoritePageComponent } from '../../pages'

const routes: Routes = [
  {
    path: '',
    component: AllBrewsPageComponent
  },
  {
    path: 'favorites',
    component: FavoritePageComponent
  },
  {
    path: '*',
    redirectTo: ''
  }
]

export default routes
