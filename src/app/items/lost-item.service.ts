import { Injectable } from '@angular/core';
import {LostItem} from "./add-lost-item/lost-item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LostItemService {

  constructor(private http: HttpClient) { }

  public save(lostItem: LostItem) {
    return this.http.post("http://localhost:666/lost-items", lostItem);
  }
}
