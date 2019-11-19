import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule } from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'AngularMetarialUI';
  titleDes ='Select Genre';

  onClickPolular(){
    this.titleDes = 'Polular Movie List';
    console.log('aaaa');
  }
  onClickAnimated(){
    this.titleDes = 'Drama Movie List';
    console.log('aaaa');
  }
  onClickDocumentary(){
    this.titleDes = 'Action Movie List';
    console.log('aaaa');
  }

}
