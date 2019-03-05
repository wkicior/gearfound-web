import { Injectable } from '@angular/core';
import {LostItem} from "../model/lost-item";
import {HttpClient} from "@angular/common/http";
import {combineLatest, Observable} from "rxjs";
import {UserService} from "../../users/services/user.service";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LostItemService {
  private readonly endpoint = 'http://localhost:8080/api/items/lost-items';

  constructor(private http: HttpClient, private userService: UserService) { }

  public save(lostItem: LostItem): Observable<LostItem> {
    return this.http.post<LostItem>(this.endpoint, lostItem);
  }

  public search(searchPhrase: string): Observable<LostItem[]> {
    return this.http.get<LostItem[]>(`${this.endpoint}?search=${searchPhrase}`);
  }

  public userItems(): Observable<LostItem[]> {
    return this.userService.getUserId().pipe(
      switchMap(id => this.http.get<LostItem[]>(`${this.endpoint}?registrantId=${id}`))
    );
  }

  public getLostItemById(id: string): Observable<LostItem> {
    return this.http.get<LostItem>(`${this.endpoint}/${id}`);
  }

  lostItemBelongsToUser(lostItem$: Observable<LostItem>) { //TODO: replace with LostItem, not Observable
    return combineLatest(lostItem$, this.userService.getUserId()).pipe(
      map( ([item, userId]) => {
        return item.registrantId === userId
      }),
    );
  }

  edit(lostItem: LostItem): Observable<LostItem> {
    return this.http.put<LostItem>(`${this.endpoint}/${lostItem.id}`, lostItem)
  }
}
