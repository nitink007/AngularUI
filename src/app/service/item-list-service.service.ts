import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItemList } from './interface/IItemList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListServiceService {

  constructor(private http: HttpClient) { }

  private url = "/assets/data/sample1.json"
  private itemList = []

  getItemlist(): Observable<IItemList[]> {

    return this.http.get<IItemList[]>(this.url);


    // return [
    //   {id: 1, name: "laptop", type: "electronics"},
    //   {id: 2, name: "blanket", type: "cloths"},
    //   {id: 3, name: "mobile", type: "electronics"},
    //   {id: 4, name: "shoes", type: "footwear"},
    //   {id: 5, name: "cake", type: "food"}
    // ]
  }
}
