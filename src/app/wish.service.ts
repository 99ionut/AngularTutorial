import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

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

    return this.http.get("assets/wishes.json", options).pipe(catchError(this.handleError));
    //get example with params
    //return this.http.get("assets/wishes.json?format=json&id=2", options);
    //or
    options.params = new HttpParams({fromObject:{
      format: "json",
      id: "2"
    }})
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error("issue with client or ntwork"+error.error)
    }else{
      console.error("server-side-error"+error.error);
    }

    return throwError(()=> new Error ("cannot fetch wishes, try again"));
  }

  AddWish(wish: WishItem){
    let options = this.getStandardOptions();

    options.headers = options.headers.set("authorization","value for auth");
    this.http.post("assets/wishes.json", wish ,options);
  }

}
