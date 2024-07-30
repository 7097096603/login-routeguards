import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
@Input() userData : any;
@Output() dataemiter = new EventEmitter();

constructor(){
}

sendToParent(){
this.dataemiter.emit(this.userData)

}
}
