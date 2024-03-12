import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from "../shared/services/EventService";
import { WishService } from './wish.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

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
