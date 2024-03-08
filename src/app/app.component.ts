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

  newWishText = "";

  title = 'ssswishlist';
  //used for filters
  listFilter : String = "0";
  //The get syntax binds an object property to a function that will be called when that property is looked up
  get visibleItems() : WishItem[] {
    let value = this.listFilter;

    if(value == "0"){
      return this.items;
    }else if(value == "1"){
      return this.items.filter(item => !item.isComplete);
    }else{
      return this.items.filter(item => item.isComplete);
    }
  }


  addNewWish = () =>{
    //add wish
    this.items.push(new WishItem(this.newWishText));
    //clear textbox so it becomes blank after an input so user has to retype
    this.newWishText = "";
  }
}
