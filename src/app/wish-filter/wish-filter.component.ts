import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
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
  @Input() filter: any
  //must be name of input followed by "Change"
  @Output() filterChange = new EventEmitter<any>();

  listFilter : String = "0";

  ngOnInit(): void {
    this.updateFilter("0");
  }

  updateFilter(value: any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
