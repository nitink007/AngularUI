import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  componentName = "dashboard";
  nStatus = false;
  buttonClickMessage = "Button is not Clicked";
  buttonClickCount = 0;
  inputText1 = "";
  inputText2 = "text2";

  constructor() {
    setTimeout(() => {
      this.nStatus = true;
    }, 3000);
  }

  getStatus(){
    return this.nStatus;
  }

  onClickButton() {
    this.buttonClickMessage = "Button is clicked and times"+this.buttonClickCount++;
  }

  // getInputText(event: Event) {
  //   this.inputText1 = (<HTMLInputElement>event.target).value;
  // }

  
}
