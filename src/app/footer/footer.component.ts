import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Input()  myInfo:any
  userName=''
  studentNumber:any
  
  ngOnInit() {
    console.log('this is info log...',this.myInfo)
    this.userName=this.myInfo[0].userName
    this.studentNumber=this.myInfo[0].studentNumber
    
  }

}
