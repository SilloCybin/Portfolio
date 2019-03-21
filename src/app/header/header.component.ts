import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOverGit = false;
  isOverInsta = false;
  isOverLkd = false;
  isOverContact = false;
  isOverAboutMe = false;
  isOverResume = false;
  isOverProjects = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  overGit() {
    this.isOverGit = true;
  }

  leftGit() {
    this.isOverGit = false;
  }

  overInsta() {
    this.isOverInsta = true;
  }

  leftInsta() {
    this.isOverInsta = false;
  }

  overLkd() {
    this.isOverLkd = true;
  }

  leftLkd() {
    this.isOverLkd = false;
  }

  overContact() {
    this.isOverContact = true;
  }

  leftContact() {
    this.isOverContact = false;
  }

  overAboutMe() {
    this.isOverAboutMe = true;
  }

  leftAboutMe() {
    this.isOverAboutMe = false;
  }

  overProjects() {
    this.isOverProjects = true;
  }

  leftProjects() {
    this.isOverProjects = false;
  }

  overResume() {
    this.isOverResume = true;
  }

  leftResume() {
    this.isOverResume = false;
  }

  isOnAboutMe() {
    return (this.router.url === '/AboutMe');
  }

  isOnContact() {
    return (this.router.url === '/Contact');
  }

  isOnProjects() {
    return (this.router.url === '/Projects' ||
      this.router.url === '/Projects/0' ||
      this.router.url === '/Projects/1' ||
      this.router.url === '/Projects/2' ||
      this.router.url === '/Projects/3' ||
      this.router.url === '/Projects/4' ||
      this.router.url === '/Projects/5' ||
      this.router.url === '/Projects/6' ||
      this.router.url === '/Projects/7' ||
      this.router.url === '/Projects/8' ||
      this.router.url === '/Projects/9')
  }

  isOnResume(){
    return (this.router.url === '/Resume')
  }

  onAboutMeClick(){
    this.isOverAboutMe = !this.isOverAboutMe;
  }

  onResumeClick(){
    this.isOverResume = !this.isOverResume;
  }

  onProjectsClick(){
    this.isOverProjects = !this.isOverProjects;
  }

  onContactClick(){
    this.isOverContact = !this.isOverContact;
  }

  onGitClick(){
    this.isOverGit = !this.isOverGit;
  }

  onInstaClick(){
    this.isOverInsta = !this.isOverInsta;
  }

  onLkdClick(){
    this.isOverLkd = ! this.isOverLkd;
  }

}
