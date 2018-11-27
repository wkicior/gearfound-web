import { Injectable } from '@angular/core';
import {LostItem} from "./add-lost-item/lost-item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LostItemService {

  constructor(private http: HttpClient) { }

  public save(lostItem: LostItem) {
    return this.http.post("http://localhost:8080/lost-items", lostItem);
  }

  public search(searchPhrase: string): Observable<LostItem[]> {
    return this.http.get<LostItem[]>('http://localhost:8080/lost-items');
  }
}
