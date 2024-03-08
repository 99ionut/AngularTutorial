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
  visibleItems : WishItem[] = this.items;

  toggleItem = (e : any, item : WishItem) =>{
    //binds data by setting isCompleto to true or false
    item.isComplete = !item.isComplete;
    console.log(e);
    console.log(item);
    console.log("Toggle!");
  }

  filterChanged = (value : any) =>{
    console.log(value);
    if(value == "0"){
      this.visibleItems = this.items;
    }else if(value == "1"){
      this.visibleItems = this.items.filter(item => !item.isComplete);
    }else if(value == "2"){
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }

  addNewWish = () =>{
    //add wish
    this.items.push(new WishItem(this.newWishText));
    //clear textbox so it becomes blank after an input so user has to retype
    this.newWishText = "";
  }
}
