import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  oddNumbers =[];
  evenNumbers =[];
  eventReceived(i: number)
  {
    console.log("eventhappened");
   if(i %2 === 0)
   {
     this.evenNumbers.push(i);
   }
   else
   {
     this.oddNumbers.push(i);
   }
  }
  
}
