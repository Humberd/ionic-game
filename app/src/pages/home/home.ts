import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent {
  myCustomMessage = "hello";


  constructor(public navCtrl: NavController) {
    console.log(this.myCustomMessage);
  }

}
