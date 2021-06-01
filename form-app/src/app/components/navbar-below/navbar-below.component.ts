import { Component } from '@angular/core';
import {  Observable } from 'rxjs';
import {filter, pluck} from 'rxjs/operators'
import { AuthService } from '../../services/auth.service';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'navbar-below',
  templateUrl: './navbar-below.component.html',
  styleUrls: ['./navbar-below.component.css']
})
export class NavbarBelowComponent {

  loginStatus!:string
  loginState$: Observable<string>

  constructor( private auth: AuthService, private step:StepService) {
    this.loginState$ = this.auth.storageChange$.pipe(
      filter(({key}) => key  === 'state'),
      pluck("value"))
  }

  restart(){
    this.step.reloadComponent()
  }
}
