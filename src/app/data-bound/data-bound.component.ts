import { Component,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-data-bound',
  templateUrl: './data-bound.component.html',
  styleUrls: ['./data-bound.component.css']
})
export class DataBoundComponent {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  ChildData:string ='';
  sendMessage() {
    this.messageEvent.emit('Message going from child to parent');
  }
  getMessage() {
    this.ChildData=this.message;
  }
}
