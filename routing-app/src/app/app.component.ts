import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-app';

  constructor(private router: Router){}

  goToContact(){
    //in this array you can pass multiple strings that will create a url path
    this.router.navigate(["contact"]);
  }
}
