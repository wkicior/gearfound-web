import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FoundItem} from "../model/found-item";
import {UserService} from "../../users/services/user.service";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FoundItemService {
  private readonly endpoint = 'http://localhost:8080/api/items/found-items';

  constructor(private http: HttpClient, private userService: UserService) { }

  public save(foundItem: FoundItem): Observable<FoundItem> {
    return this.http.post<FoundItem>(this.endpoint, foundItem);
  }

  public search(searchPhrase: string): Observable<FoundItem[]> {
    return this.http.get<FoundItem[]>(`${this.endpoint}?search=${searchPhrase}`);
  }

  public userItems(): Observable<FoundItem[]> {
    return this.userService.getUserId().pipe(
      switchMap(id => this.http.get<FoundItem[]>(`${this.endpoint}?registrantId=${id}`))
    );
  }

  public getFoundItemById(id: string): Observable<FoundItem> {
    return this.http.get<FoundItem>(`${this.endpoint}/${id}`);
  }
}
