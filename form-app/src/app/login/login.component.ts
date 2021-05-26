import { state } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new FormControl('');
  password = new FormControl('')
  authPassword= "1234";
  authUsername= "Admin";

  constructor(private router: Router,
    private authS:AuthService) { }
  ngOnInit(): void {
    
  }
  auth() {
   if(this.user.value == this.authUsername && this.password.value == this.authPassword){
     this.router.navigateByUrl("emp-info")
     this.authS.didLogin()
     this.authS.setStorageItem({
       key: 'state',
       value: 'true',
     })
   }
  }


}
