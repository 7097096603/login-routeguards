import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginapp';
  userDetails : any;
  fromChild : any;

  constructor( private testservice : TestService){
this.getDetails();  
  }
  


getDetails(){
this.testservice.get().subscribe((response : any)=>{
  console.log(response);
  this.userDetails = response.users;
})

}
receiveData(event : any){
this.fromChild  = event.firstName;
  console.log('this is emitted form child ' + event)
}
}
