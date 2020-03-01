export class Beer extends Object {
  id: string | number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: Object
  boil_volume: Object
  method: Object
  ingredients: Object
  food_pairing: Array<string>
  brewers_tips: string
  contributed_by: string
}
