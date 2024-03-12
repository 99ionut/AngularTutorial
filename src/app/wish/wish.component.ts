import { Component } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from "../../shared/services/EventService";
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  
  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any)=>{
        //handle data on success
        console.log(data);
        this.items = data;
      },
      //second argument handle data on error
      (error : any)=>{
        alert(error.message)
      }
      
    )
  }

  items : WishItem[] = [];

  title = 'ssswishlist';

  filter: any;

  constructor(events: EventService, private wishService: WishService ){
    events.listen("removeWish",(wish : any)=>{
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
      console.log(wish);
    });
  }
}
