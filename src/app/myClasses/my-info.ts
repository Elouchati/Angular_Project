export class MyInfo {
    private firstName: string;
    private lastName: string;
    private studentNumber:any
    private userName: string | undefined; 
    private programName: string | undefined;
    private emailAddress: string | undefined;
    private homeCountry: string | undefined;
    private pictureName: string | undefined;
    private province : string | undefined;
    // arraydetail:any
    
  
    constructor(firstName: string, lastName:string,studentNumber:any, userName: string,
      programName:string,emailAddress:string,homeCountry:string,pictureName:string,province:string
      ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.studentNumber=studentNumber;
      this.userName=userName;
      this.programName=programName;
      this.emailAddress=emailAddress;
      this.homeCountry=homeCountry;
      this.pictureName=pictureName;
      this.province=province
    }
   
    // getName(){
        
    // return `${this.firstName} ${this.lastName} ${this.programName}`;
      
    // }
  
    // getYearlySalary(): number {
    //   return 12 * this.studentNumber;
    // }
 
    // getDetail(firstName:string,lastName:string){
    //    const obj={
    //      "firstName":firstName,
    //      "lastName":lastName
    //    }
    //    this.arraydetail.push(obj)
    //    console.log('this is array detail......',this.arraydetail)
    // }
    
  }

  