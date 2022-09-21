import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input()  myInfo:any
  firstName=''
  lastName=''
  programName=''
  ngOnInit() {
    console.log('this is info log...',this.myInfo)
    this.firstName=this.myInfo[0].firstName
    this.lastName=this.myInfo[0].lastName
    this.programName=this.myInfo[0].programName
    
 
  }

}
