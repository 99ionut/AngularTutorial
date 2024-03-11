import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import events from "../../shared/services/EventService";

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish! : WishItem;


  getClasses = () =>{
    //return this.fullfilled ? ['strikeout','text-muted'] : [''];
    //or return an object based on the values
    return {'strikeout text-muted': this.wish.isComplete}
  }

  removeWish(){
    events.emit("removeWish", this.wish);
  }

  toggleFullfilled = () =>{
    
  }
}
