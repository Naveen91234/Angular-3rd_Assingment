import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage = "Message comes from parent to child";
  childMessage: string = '';
  myStyle:object = {
    text:'center',
    color:'white',
    background:'gray',
    border:'5px solid blue'
  };
  receiveMessage($event:any) {
    this.childMessage = $event;
  }

 
  
}
