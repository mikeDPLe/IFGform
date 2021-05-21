import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs'


export interface StorageChange {
  key:string;
  value:string;
}

export interface StorageGetItem {
  key:string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public storageChange$:ReplaySubject<StorageChange> = new ReplaySubject;

  constructor() { 
    
  }

  public setStorageItem(change:StorageChange):void {
    window.sessionStorage.setItem(change.key, change.value);
    this.storageChange$.next(change)
  }

  public getStorageItem(getItem:StorageGetItem):void {
    window.sessionStorage.getItem(getItem.key)
  }

  passedLogin: boolean  = false;
  passedLoginObs = new BehaviorSubject(this.passedLogin)

  didLogin() {
    this.passedLoginObs.next(true)
    sessionStorage.setItem('authstate', 'true')
    console.log('passed login')
  }

  
}
