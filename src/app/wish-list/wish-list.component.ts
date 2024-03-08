import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})

export class WishListComponent {
  //if custom component proprety, use @input to tell angular its an input of the component
  @Input() wishes : WishItem[] = [];


  toggleItem = (e : any, item : WishItem) =>{
    //binds data by setting isCompleto to true or false
    item.isComplete = !item.isComplete;
    console.log(e);
    console.log(item);
    console.log("Toggle!");
  }

}
