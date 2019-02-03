import { Injectable } from '@angular/core';
import {LostItem} from "../model/lost-item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "../../users/services/user.service";
import {pluck, switchMap, take} from "rxjs/operators";

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
}
