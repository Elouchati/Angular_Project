import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()  myInfo:any
  userName=''
  firstName=''
  lastName=''
  studentNumber:any
  todayDate:any
  countryName=''
  countryEmail=''
  name=''
  province=''
  ngOnInit() {
    console.log('this is info log...',this.myInfo)
    this.userName=this.myInfo[0].userName
    this.firstName=this.myInfo[0].firstName
    this.lastName=this.myInfo[0].lastName
    this.countryName=this.myInfo[0].homeCountry
    this.countryEmail=this.myInfo[0].emailAddress
    this.studentNumber=this.myInfo[0].studentNumber
    this.province=this.myInfo[0].province
     this.todayDate= new Date();
     console.log('today date...',this.todayDate)
    
  }
  toggleCountry = true;
  toggleEmail = true;
  afterClick = 'Enable'; 
  changeCountryText(){
    this.toggleCountry = !this.toggleCountry;
  }
  changeEmailText(){
    this.toggleEmail = !this.toggleEmail;
  }


}
