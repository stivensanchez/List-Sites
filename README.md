# Sites

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

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


Información curso

638

Instalación NVM(Node Version Management) -> https://github.com/nvm-sh/nvm/blob/master/README.md#troubleshooting-on-linux
nvm -> Para ver sus metodos
nvm list
nvm use
nvm install latest or NUM_VERSION
para ejecutar la terminal node ejecutamos -> node
npm -> Node Package Management
all version node -> https://nodejs.org/dist/

angular click de forma local
https://medium.com/@starikovs/how-to-use-angular-cli-locally-729dbb6707dd

Instalación de angular
-> npm install @angular/cli@latest or NUM-VERSION

Instalación de bootstrap
-> npm install -S bootstrap

Se importa de la siguiente manera
-> @import '~bootstrap/dist/css/bootstrap.css';

Cuando trabajamos con componentes podemos llamar un componente dentro de otro por medio del selector definido en la definición del componente
-> <view></view>

Podemos declarar e inicializar variables y arrays 
-> destinos: string[] or destinos: Array<string> => Declaración
-> destinos = ['itemOne', 'itemTwo']

Podemos enviar parametros(Argumentos) de variables de un componente a otro donde el componente destino la variable a recibir debe estar definido como:
-> @Input() nombre: string;

Y se envia de la siguiente forma
<view [nombre]="nameVariable">

Tambien podemos recorrer array destrin del llamado a otro componente ejm:
<view *ngFor="let item of destinos">

Variables de formulario HTML Se identifican por #
-> #prueba

Estas variables no las reconoce typeScript, ya que son variables de tipo HTMLInputElement y su valor sera el .value
-> (click)="prueba(prueba.value)"

Bootstrap(Boostraping) arranque de una aplicación angular.json/main.ts

deploy angular por medio de npm
-> now(npm install -g now) or vercel(npm install -g vercel)

Transpiler para pasar de ES6 a ES5

**TypeScript**
permite el tipeado de datos ejm:
-> let or var nameVariable: string = "Hola"

las funciones en sus argumentos tambien se puede definir el tipo de dato a recibir
-> function saludar(saludo: string) { }

las funciones tambien pueden se les puede decir que tipo de valor van a devolver
-> function saludar(saludo: string): string { }

paquete tsun para trabajar en consola con typescript
-> npm install -g tsun@latest or num_version

Ejecutar tsun
-> tsun

Saber le versión de TypeScript de forma local
-> node_modules/.bin/tsc -v

De forma global
-> tsc -v

Instalar TypeScript
-> npm install typescript@latest or num_version

tipo de dato any recibe cualquier valor
-> let dato: any;

si una función no devuelve nada se puede declarar como void
-> function saludar(): void { }

funciones flecha 
-> x.forEach((x) => x.valor);

[(ngModel)] necesita de la importación de FormsModule en el .module.ts

cuando llamamos un componente dentro de otro angular nos crea un tag fitició en el DOM
le podemos agregar clases de la siguinete forma
-> @hostBinding('attr.class') cssClass = 'col-md-4';



Zeit Now
https://www.youtube.com/watch?v=DoXIOOB_TXo

Tutoriales Angular
-> https://www.youtube.com/watch?v=WriMvn-xqug
-> https://www.youtube.com/watch?v=kqYuyACFVkE