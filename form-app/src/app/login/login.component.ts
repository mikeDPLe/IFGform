import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route:ActivatedRoute) { }

  


  ngOnInit(): void {
    
  }
  auth() {
   if(this.user.value == this.authUsername && this.password.value == this.authPassword){
     this.router.navigateByUrl("emp-info")
   }
   console.log(this.user.value)
   console.log(this.password.value)
  }
}
