import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchItemsService {

  constructor() { }

  public search(searchPhrase: string): Observable<any[]> {
    return of([])
  }
}
