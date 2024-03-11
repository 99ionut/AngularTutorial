import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText! : string;
  @Input() fullfilled! : boolean;
  //must be name of input followed by "Change"
  @Output() fullfilledChange = new EventEmitter<boolean>();

  getClasses = () =>{
    //return this.fullfilled ? ['strikeout','text-muted'] : [''];
    //or return an object based on the values
    return {'strikeout text-muted': this.fullfilled}
  }

  toggleFullfilled = () =>{
    //binds data by setting isCompleto to true or false
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
