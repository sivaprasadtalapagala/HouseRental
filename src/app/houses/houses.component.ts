import { Component } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  public ownerName:any;
  public EmailId:any;
  public MobileNo:any;
  constructor(){

  }

  viewOwnerInfo(){
      this.ownerName="siva",
      this.EmailId="sp1015929@gmail.com",
      this.MobileNo="9493766524"
  }
  


}
