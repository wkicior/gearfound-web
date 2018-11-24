import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public search(searchPhrase: string): Observable<any[]> {
    return of([])
  }
}
