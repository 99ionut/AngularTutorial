import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //can be :any or other types, in this case WishItem array
  items : WishItem[] = [
    new WishItem("to learn Angular"),
    new WishItem("get coffe",true),
    new WishItem("grasss")
  ]

  title = 'ssswishlist';

  filter: any = () =>{

  }
}
