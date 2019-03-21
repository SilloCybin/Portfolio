import { Injectable } from '@angular/core';
import {Project} from '../models/Project';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  fileStorageTitle = 'Automated File Transfer and Storage';
  fileStorageDescription = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is probably the most exciting and useful personal project i\'ve worked on ! I did it while i was in Bogota ' +
    'for a semester as an exchange student. I was taking looots of pictures, and thought why not finally make a proper use of my 1To external ' +
    'hard drive, attached to my Raspberry Pi back at home in France ? You might say meh, so many FTP clients out there already, reinventing ' +
    'the wheel are you ? Sure. I was using Fugu myself whenever i wanted to send files to or take files from my Raspi. Except i wanted to ' +
    'automate the process. I wanted to be able to put files in a dedicated directory on my laptop, and know they\'ve been safely transferred ' +
    '(Not copied, transferred) to my hard drive with the same file path overnight. No UI needed.' + '<br/><br/>' +
    'Meaning, also, that i can then have access ' +
    'to these files whenever i want later, without them taking too much space on my everyday personal computer. In other words, i wanted to ' +
    'make a NAS out of my Pi, automatically fed with new files from my personal computer whenever i decided they belong there.' + '<br/><br/>' +
    'So how does it work ?' + '<br/><br/>' +
    'Since my Pi is also my VPN server, the program (executed on my laptop) starts by checking my laptop is connected ' +
    'to it, ensuring safe file travel. If it is indeed connected, the program then proceeds with reading the content of a specific directory. ' +
    'These files are put in a first list, then compared one by one to a MySQL database keeping record of all files contained in the hard drive. ' +
    'For each file, if no duplicate was found in the database, the file is put in a second list, whose content will then be sent to the Pi ' +
    'using FTP. Once the transfer complete, the directory is emptied, making space on my laptop.' + '<br/><br/>' +
    'This program is executed everyday at midnight ' +
    'thanks to a cronjob, that also creates a log file containing the output of the program at each step. When i came back home in France, ' +
    'i tweaked it so that it checked either a VPN or a LAN connection to the Pi, allowing the program to run properly at home too.' + '<br/><br/>' +
    'So there i have it. My very own self made automated file transfer to my NAS. As of today the NAS keeps various types of files and folders : ' +
    'pictures, personal documents (CV, ID, Diplomas...), and projects, all in a nice neatly organized directory tree that has the same structure as ' +
    'the "dump" directory on my laptop. How well does it work ? Fine ! Except, i have to say, it\'s pretty slow. ' +
    'My VPN client uses a 2048bit encryption, and my hard drive is attached to the Pi through USB 2.0 sooo... Yep. Could be faster. But since it\'s ' +
    'an automated process taking place overnight, i don\'t really mind do i ?';
  fileStorageTechnologies = ['Java', ' JDBC',' MySQL',' FTP',' Raspberry Pi 3B+ (Raspbian Jessie)',' MacBook Pro 2012 (Mac OS X)', ' IP',
    ' Crontab'];
  filestorageLearned = 'How to use JDBC to connect to a MySQL database, Java FTP-Client to transfer files, automate a program execution,' +
    ' create specific iptables rules, and be mindful in terms of algorithm writing';
  fileStorageID = 1;
  fileStorageType = 'Personal project';
  fileStorageCompleted = 'December 2018';
  fileStorage = new Project(this.fileStorageTitle, this.fileStorageDescription, this.fileStorageTechnologies, this.filestorageLearned,
    this.fileStorageID, this.fileStorageType, this.fileStorageCompleted);

  tictactoeTitle = 'TicTacToe Game App';
  tictactoeDescription = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project is the one through which i learned the most in mobile app development. Step by step across a semester, ' +
    'we were asked to create a tic tac toe game. The first part was to create an offline, vs android mode. The game algorithm was based on an ' +
    'open source code, and we had to incorporate the logic into our app. We added orientation change and sound effects to it. Not much, moreover ' +
    'we were basically following a tutorial, with very few non detailed steps we had to complete by ourselves. The biggest and most interesting part ' +
    'was the online mode, that we had to figure out and develop entirely by ourselves.' + '<br/><br/>' +
    'With an online mode you need at least two things: account managing and authentication, and real-time database keeping track of the players ' +
    'status, and game status once two players are challenging each other. Although it\'s optional i also decided to incorporate notifications ' +
    'in the app. All this can be efficiently managed using Firebase.' + '<br/><br/>' +
    'After signing up or logging in, the player is taken to a page displaying all connected players. A challenge proposal notification is sent to ' +
    'the player clicked upon. To trigger notifications in firebase, a short js script has to be uploaded to the firebase project using a cli npm command. By clicking ' +
    'on the notification the challenged player is taken to a page in which he either accepts or rejects the proposal. If he refuses, both players are ' +
    'sent back to the connected players list page. If he accepts, both are taken to the actual game page. Once a player has won, both are asked whether ' +
    'they want to play again, allowing them to either continue or be taken back to the connected players list page.' + '<br/><br/>' +
    'In the end it\'s a series of inserts, updates and deletions in the database, upon which event listeners trigger actions back in the players apps, ' +
    'after each one of their interactions, to keep the app synchronized between two challengers.';
  tictactoeTechnologies = ['Android 8 (Oreo)',' Java',' Firebase', ' Javascript'];
  tictactoeLearned = 'How to use Firebase (Database, Authentication, Messaging), the Java Firebase API, and to be extremely mindful regarding algorithm writing';
  tictactoeID = 2;
  tictactoeType = 'Scholar project';
  tictactoeCompleted = 'November 2018';
  tictactoe = new Project(this.tictactoeTitle, this.tictactoeDescription, this.tictactoeTechnologies, this.tictactoeLearned, this.tictactoeID,
    this.tictactoeType, this.tictactoeCompleted);

  colArchArchTitle = 'Archeological Artefact Data App';
  colArchArchDescription = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In my mobile app development class during my semester abroad in Bogota, we were asked to make an app that uses a web service ' +
    'from scratch. So i decided to make a virtual museum.' + '<br/><br/>' +
    'The colombian government Open Data website has a lot of things to work with. And one of the datasets they had contained information on archeological ' +
    'objects found on the colombian territory (type of object, location of discovery, museum they\'re exposed in...) . Unfortunately, the only thing it ' +
    'didn\'t contain was pictures of the objects. Kind of a bummer... But i still decided to do it.' + '<br/><br/>' +
    'On launch, the app creates an SQLite Database and loads data, thanks to the Retrofit API, from the following webpage into it : ' +
    '<a href="https://www.datos.gov.co/Cultura/Contenidos-Parques-Arqueologicos-Nacionales/8zhx-ryb6">https://www.datos.gov.co/resource/8zhx-ryb6.json</a>' + '. ' +
    'The app then uses the data loaded into this local database to display the the information. After clicking a button the user is taken to a page listing ' +
    'for all objects their basic info. A menu allows him to use a filter for the app to display only the objects matching the specified parameters. Upon click ' +
    'of an object in the list, the app displays all the information on the object.';
  colArchArchTechnologies = ['Android 8 (Oreo)',' Java',' Retrofit',' SQLite'];
  colArchArchLearned = 'How to create and use a SQLite database, and load data from an Open Data website in it using a RESTful API (Retrofit)';
  colArchArchID = 3;
  colArchArchType = 'Scholar project';
  colArchArchCompleted = 'December 2018';
  colArchArch = new Project(this.colArchArchTitle, this.colArchArchDescription, this.colArchArchTechnologies, this.colArchArchLearned,
    this.colArchArchID, this.colArchArchType, this.colArchArchCompleted);

  portfolioTitle = 'Personal Website';
  portfolioDescription = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a developer, and computer science and networks engineer, an online portfolio is kind of a must. After following the ' +
    'OpenClassrooms course on Angular, and feeling comfortable enough with the technology, i decided to create my personal website - you probably ' +
    'guessed it : the one you\'re on right now. ' + '<br/><br/>' +
    'I wanted it to be as sober as possible, but still quite pleasant in terms of user experience. As you may have seen by now, it contains a little ' +
    'info about me, gives the possibility to download my resume and get my email, and has a page dedicated to the projects i feel describe enough what ' +
    'i\'m capable of doing. I used Bootstrap and Font Awesome icons for the design aspect. I really hope you\'re enjoying it.';
  portfolioTechnologies = ['Angular',' Bootstrap',' Raspberry Pi 3B+ (Raspbian Jessie)',' Nginx'];
  portfolioLearned = 'How to design a responsive, user-friendly website';
  portfolioID = 4;
  portfolioType = 'Personal project';
  portfolioCompleted = 'March 2019';
  portfolio = new Project(this.portfolioTitle, this.portfolioDescription, this.portfolioTechnologies, this.portfolioLearned, this.portfolioID,
    this.portfolioType, this.portfolioCompleted);

  projectList = [this.fileStorage, this.tictactoe, this.colArchArch, this.portfolio];
  projectListSubject = new Subject<Project[]>();

  singleProject: Project;
  singleProjectSubject = new Subject<Project>();

  constructor() {
    this.emitProjects();
  }

  emitProjects(){
    this.projectListSubject.next(this.projectList);
  }

  getSingleProject(id: number){
    this.singleProject = this.projectList[id];
    this.emitSingleProject();
  }

  emitSingleProject(){
    this.singleProjectSubject.next(this.singleProject);
  }
}
