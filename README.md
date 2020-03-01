# Hello! This is Pub app.

Pub app is my first Angular app and was created based on some tips presented on [this Medium article](https://medium.com/@motcowley/angular-folder-structure-d1809be95542) and [this one](https://itnext.io/clean-code-checklist-in-angular-%EF%B8%8F-10d4db877f74). 

To the bootstrap of some components were used [Material UI](https://material.angular.io/) and the design was created by me and you can find it on [this link](https://xd.adobe.com/view/556c436f-ced8-4f12-57d2-0ecdcd90d218-235d/grid).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

To run it you can just run: 

```
npm install

and then:

ng serve
```

After cloning the repository.

Make sure you have npm installed and ng :)

## Structure

```
./src/app/
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
├── core
│   ├── interfaces
│   │   └── beer
│   │       └── beer.interface.ts
│   └── routing
│       └── routing.config.ts
├── pages
│   ├── all-brews-page
│   │   ├── all-brews-page.component.css
│   │   ├── all-brews-page.component.html
│   │   ├── all-brews-page.component.spec.ts
│   │   ├── all-brews-page.component.ts
│   │   └── index.ts
│   ├── favorite-page
│   │   ├── favorite-page.component.css
│   │   ├── favorite-page.component.html
│   │   ├── favorite-page.component.spec.ts
│   │   ├── favorite-page.component.ts
│   │   └── index.ts
│   └── index.ts
└── shared
    ├── components
    │   ├── card
    │   │   ├── card.component.css
    │   │   ├── card.component.html
    │   │   ├── card.component.spec.ts
    │   │   ├── card.component.ts
    │   │   └── index.ts
    │   ├── details-card
    │   │   ├── details-card.component.css
    │   │   ├── details-card.component.html
    │   │   ├── details-card.component.spec.ts
    │   │   ├── details-card.component.ts
    │   │   └── index.ts
    │   ├── index.ts
    │   ├── navbar
    │   │   ├── index.ts
    │   │   ├── navbar.component.css
    │   │   ├── navbar.component.html
    │   │   ├── navbar.component.spec.ts
    │   │   └── navbar.component.ts
    │   ├── no-content
    │   │   ├── index.ts
    │   │   ├── no-content.component.css
    │   │   ├── no-content.component.html
    │   │   ├── no-content.component.spec.ts
    │   │   └── no-content.component.ts
    │   ├── pagination
    │   │   ├── index.ts
    │   │   ├── pagination.component.css
    │   │   ├── pagination.component.html
    │   │   ├── pagination.component.spec.ts
    │   │   └── pagination.component.ts
    │   ├── search
    │   │   ├── index.ts
    │   │   ├── search.component.css
    │   │   ├── search.component.html
    │   │   ├── search.component.spec.ts
    │   │   └── search.component.ts
    │   └── tabs
    │       ├── index.ts
    │       ├── tabs.component.css
    │       ├── tabs.component.html
    │       ├── tabs.component.spec.ts
    │       └── tabs.component.ts
    ├── functions
    │   └── index.ts
    ├── material.module.ts
    ├── services
    │   ├── brew
    │   │   ├── brew.service.spec.ts
    │   │   └── brew.service.ts
    │   ├── favorites
    │   │   ├── favorites.service.spec.ts
    │   │   └── favorites.service.ts
    │   ├── pagination
    │   │   ├── pagination.service.spec.ts
    │   │   └── pagination.service.ts
    │   └── search
    │       ├── search.service.spec.ts
    │       └── search.service.ts
    ├── shared.module.ts
    └── styles
        └── custom-theme.scss
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
