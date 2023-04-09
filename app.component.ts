import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*name:string = "Dhinakaran";
  Age:number = 25;
  city(){
    return ' chennai'
  }
  value:boolean = false

  names:string="enter name"
  names1:string="dhina"

  change1(){
    this.names="name entered"
  }
  change(){
    this.names1="Gaja"
  }*/
  name:string=""
  text:string="No name is entered"
  change(){
   this.text="Your Name is"+this.name
  }
}
