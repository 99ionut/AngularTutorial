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

   toggleItem = (e : any, item : WishItem) =>{
    //binds data by setting isCompleto to true or false
    item.isComplete = !item.isComplete;
    console.log(e);
    console.log(item);
    console.log("Toggle!");
  }
}
