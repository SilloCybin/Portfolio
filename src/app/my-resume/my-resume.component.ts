import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {

  isOverButton: boolean;

  constructor() { }

  ngOnInit() {
  }

  onButtonHover(){
    this.isOverButton = true;
  }

  onButtonLeave(){
    this.isOverButton = false;
  }

  onClick(){
    this.isOverButton = !this.isOverButton;
  }

}
