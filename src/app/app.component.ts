import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title: string = "Dekond Frontend"

  constructor() {
    document.documentElement.style.setProperty("--navigation", "none");
  }
  isActive = false;

  showNavigation(){
    this.isActive = !this.isActive;
    if(this.isActive){
      document.documentElement.style.setProperty("--navigation", "block");
    }
    else{
      document.documentElement.style.setProperty("--navigation", "none");
    }
  }

}
