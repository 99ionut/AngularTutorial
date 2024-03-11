import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from "../shared/services/EventService";

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

  filter: any;

  constructor(events: EventService ){
    events.listen("removeWish",(wish : any)=>{
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
      console.log(wish);
    });
  }
}
