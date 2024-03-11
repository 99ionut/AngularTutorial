import { Component, Input, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventEmitter } from 'stream';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText! : string;
@Input() fullfilled! : boolean;
@Output() fullfilledChange = new EventEmitter<boolean>();

  toggleFullfilled = () =>{
    //binds data by setting isCompleto to true or false
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
