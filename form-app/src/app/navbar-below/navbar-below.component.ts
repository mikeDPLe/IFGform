import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import {filter, map, pluck} from 'rxjs/operators'
import { AuthService } from '../auth.service';
import { StepService } from '../step.service';

@Component({
  selector: 'navbar-below',
  templateUrl: './navbar-below.component.html',
  styleUrls: ['./navbar-below.component.css']
})
export class NavbarBelowComponent implements OnInit {

  loginStatus!:string
  loginState$: Observable<string>

  constructor( private auth: AuthService, private step:StepService) {
    this.loginState$ = this.auth.storageChange$.pipe(
      filter(({key}) => key  === 'state'),
      pluck("value"))
  }
  ngOnInit(): void {
  }

  restart(){
    this.step.reloadComponent()
  }
}
