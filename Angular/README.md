**Installing Angular CLI**

`npm install -g @angular/cli`

On project's folder, type:
`ng new course-manager` (replace "course-manager" for the project's name)
angular routing? `N` 
stylesheet format? `CSS`

On course-manager type:
`ng serve` / It will load the application and search main.ts then it will load all reference components

On project's folder, type:
`npm install bootstrap`

`ng g c home` g = generate / c = component / home = name of the component

# Course Manager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. `ng serve -o` to automatically open the server after runing it.

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

## Angular Materials

`ng add @angular/material` to choose a theme

[Materials](https://material.angular.io/)

## Credits 

[Weslley](https://github.com/wesllhey/course-manager/blob/master/README.md)

You can use [Netlify](https://netlify.com) to upload a static website from github.



# Angular - Como preparar seu ambiente.
**O que é o angular ?**

Framework criado pelo google focado na criação de aplicativos de página única eficientes e sofisticados.

[Documentação Oficial](https://angular.io/)

**O que é uma página SPA ?**

Um SPA é uma aplicação web que roda em uma única página.

**Fonte:** [Artigo: O que é uma SPA: Single-Page Application?](https://angular.io/)

## Objetivo

Aprender o que é o angular, para que serve e como construir uma aplicação inicial com angular e suas ferramentas.

## Instalação angular CLI.

```bash
npm install -g @angular/cli
```

## Como inicializar a sua aplicação.

```bash
ng new my-first-project
cd my-first-project
ng serve
```

## Como compilar sua aplicacao para publicacao.

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando testes de unidade

Execute `ng test` para executar os testes de unidade via [Karma] (https://karma-runner.github.io).

## Executando testes ponta a ponta (End-to-End)

Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta(End-to-End).

## Comandos úteis angular CLI
![Comandos uteis angular cli](https://i.stack.imgur.com/WczZ8.png)

[Lista com outros comandos utilizados no angular CLI](https://malcoded.com/static/68c150aaaee9e8056f44fb81a08799ad/f9a96/angular-cli-cheat-sheet.webp)



## License
[MIT](https://choosealicense.com/licenses/mit/)