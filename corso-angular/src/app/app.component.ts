import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso-angular';

  onInput(event: Event){
    this.title = (<HTMLInputElement>event.target).value;
  }

  onClick(event: Event){
    this.title = "btn cliccato";
  }

}
