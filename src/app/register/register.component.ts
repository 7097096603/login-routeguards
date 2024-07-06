import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup<any>;
  
  constructor(private authService : AuthService){
    this.registerForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required),
    });
  }


submit() {
let form =  {
  username : this.registerForm.controls['username'].value,
  password : this.registerForm.controls['password'].value,
  role : this.registerForm.controls['role'].value
}
this.authService.register(form).subscribe((res)=>{
  alert(res);
});
}

}

