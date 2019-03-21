import { Component, OnInit } from '@angular/core';
import {Project} from '../models/Project';
import {Subscription} from 'rxjs';
import {ProjectsService} from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: Project[] = [];
  projectListSubscription: Subscription;

  element = document.querySelector("#container");

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectListSubscription = this.projectService.projectListSubject.subscribe(
      (p: Project[]) => {
        this.projectList = p;
      }
    );
    this.projectService.emitProjects();
    this.element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
