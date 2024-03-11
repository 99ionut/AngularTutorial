import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<any>();

  listFilter : String = "0";

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  changeFilter(value: any){
    this.filter.emit(filters[value]);
  }
}
