import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        "Content-type": "json",
        "id": "2",
      })
    }
  }

  getWishes(){
    let options = this.getStandardOptions();

    return this.http.get("assets/wishes.json", options);
    //get example with params
    //return this.http.get("assets/wishes.json?format=json&id=2", options);
    //or
    options.params = new HttpParams({fromObject:{
      format: "json",
      id: "2"
    }})
  }

  AddWish(wish: WishItem){
    let options = this.getStandardOptions();

    options.headers = options.headers.set("authorization","value for auth");
    this.http.post("assets/wishes.json", wish ,options);
  }

}
