import { Component } from '@angular/core';
import { FormControl,FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form! : FormGroup;
constructor(private authservice : AuthService,private route :Router ){
this.form = new FormGroup({
  username: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
})
}

submit(){
 let username = this.form.controls['username'].value;
 let password = this.form.controls['password'].value;
 if(this.form.valid) {
this.authservice.login(username, password).subscribe(response => {
 localStorage.setItem('token',response.token);
 localStorage.setItem('user',response.user.role);
this.route.navigate(['/landing']);
// this is from sample;
});
 }
}
}
