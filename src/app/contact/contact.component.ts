import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  wantsEmailAddress = false;
  isOverButton = false;

  constructor() { }

  ngOnInit() {
  }

  overButton(){
    this.isOverButton = true;
  }

  leftButton(){
    this.isOverButton = false;
  }

}
