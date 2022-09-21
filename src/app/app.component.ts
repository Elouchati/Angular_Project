import { Component } from '@angular/core';
import {MyInfo} from './myClasses/my-info'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OuchtatiA3';
  
 MyInfo:any= [
    new MyInfo("Adil", "Ouchtati", 7896214,"Elouchtati","Software developer","Elouchtati@gmail.com","Algeria","ouchtati.png","Ontario"),
  ];
 
  ngOnInit() {
   
    
  }
  
}
