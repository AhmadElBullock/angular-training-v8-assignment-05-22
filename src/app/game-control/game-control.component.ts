import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{number: number}>();
  @Output() gameStop = new EventEmitter<{stopStatus:boolean}>()
  incNumber: number = 0;
  ratio: number;
  stopNumber: any;
  stopStatus: boolean = true;

  constructor() { }
  ngOnInit() {  }

  onStart() {
    this.stopNumber = setInterval(() => {
      this.incNumber += this.ratio;
      this.gameStarted.emit({number: this.incNumber})
     }, 500);
     
   }
 
   onStop() {
     this.gameStop.emit({stopStatus: this.stopStatus})
     clearInterval(this.stopNumber);
     this.incNumber = 0;
   }

  
}
