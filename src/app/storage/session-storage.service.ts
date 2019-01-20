import { Injectable } from '@angular/core';
import {Session} from "./session";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private _session: Session;
  private KEY: string = 'gearfound-session-key';

  get session(): Session {
    if (this._session === undefined) {
      this._session = JSON.parse(sessionStorage.getItem(this.KEY));
    }
    return this._session;
  }

  public persist() {
    sessionStorage.setItem(this.KEY, JSON.stringify(this._session));
  }

  public cleanSession() {
    this.initSession();
  }

  constructor() {
    if (sessionStorage.getItem(this.KEY) === null) {
      this.initSession();
    }
  }

  private initSession() {
    this._session = new Session();
    this.persist();
  }
}
