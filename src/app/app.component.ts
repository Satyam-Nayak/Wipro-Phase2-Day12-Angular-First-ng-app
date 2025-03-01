import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from "./components/headers/headers.component";
import { GreetingComponent } from "./components/greeting/greeting.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadersComponent, GreetingComponent],
  template: `
    <app-headers/>
    <app-greeting/>
    <main>
    <router-outlet/>
    </main>
  `,
  styles: [
    
    `
    main {
      padding : 16px;
    }
    `
  ],
})
export class AppComponent {
  title = 'Satyam Nayak';
}
