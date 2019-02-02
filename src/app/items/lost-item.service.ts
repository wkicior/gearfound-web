import { Injectable } from '@angular/core';
import {LostItem} from "./lost-item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LostItemService {

  constructor(private http: HttpClient) { }

  public save(lostItem: LostItem): Observable<LostItem> {
    return this.http.post<LostItem>("http://localhost:8080/api/items/user/lost-items", lostItem);
  }

  public search(searchPhrase: string): Observable<LostItem[]> {
    return this.http.get<LostItem[]>(`http://localhost:8080/api/items/lost-items?search=${searchPhrase}`);
  }

  public userItems(): Observable<LostItem[]> {
    return this.http.get<LostItem[]>('http://localhost:8080/api/items/user/lost-items')
  }
}
