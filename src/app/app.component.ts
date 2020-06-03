import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumber: number;
  oddNumber: number;
  stopStatus: boolean;

  onStart(data:{number: number}) {
   //console.log(data.number);
   if (data.number % 2 === 0 && this.stopStatus !== true) {
     this.evenNumber = data.number;
     console.log(this.evenNumber)
   }
   if (data.number % 2 === 1) {
    this.oddNumber = data.number;
    console.log(this.oddNumber)
  }
  }

  onStop(status: {stopStatus: boolean}) {
   // this.stopStatus = status.stopStatus;
   this.evenNumber = 0;
   this.oddNumber = 0;
  }

}
