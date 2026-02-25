// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-user',
//   template: `username : {{ username }}`,
// })
// export class User{
//   username = 'YoungTech';
// }

// @Component({
//   selector: 'app-root',
//   template: `<section> <app-user /> </section> `,
//   imports: [User],
//   styles: `
//     :host {
//       color: #a144eb;
//     }
//   `,
//   })
// export class App{
//   city = 'San Francisco';
//   isServerRunning = true;
// }

// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     @for (user of users; track user.id) {
//       <p>{{ user.name }}</p>
//     }
//   `,
// })
// export class App {
//   users = [{id: 0, name: 'Sarah'},
//     {id: 1, name: 'Amy'},
//     {id: 2, name: 'Rachel'},
//     {id: 3, name: 'Jessica'},
//     {id: 4, name: 'Poornima'},
//   ];
// }

// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `<div [contentEditable]="isEditable"> </div>`,
// })

// export class App{
//   isEditable = true;
// }

// import {Component} from '@angular/core';

// @Component ({
//   selector: 'app-root',
//   template: `<button (click) = "greet()">`,
// })

// export class App{
//   greet(){
//     prompt("Hello, there");
//   }
// }
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<section (mouseover)="showSecret()">
  This is a secret message
  {{message}}</section>
  `
})

export class App{
  message = '';

  showSecret(){
    this.message = 'Way to go!'
  }
}
