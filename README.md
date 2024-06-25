# FloconVert

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## i18n

Run
ng extract-i18n --output-path src/locale --format=json
to create src/locale/messages.json with current ids, then update src/locale/messages.fr.json and src/locale/messages.en.json with said ids.

## github pages

Do not checkout the gh-pages branch, it will be updated by script.   
Update main branch or other as usual, then run

npm run build   
npx angular-cli-ghpages --dir=dist/flocon-vert/browser

then https://thomas-blanchard-sii.github.io/fr/ will be updated after a few minutes   
check deploy status https://github.com/Thomas-Blanchard-SII/Thomas-Blanchard-SII.github.io/actions