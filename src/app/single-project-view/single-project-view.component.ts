import { Component, OnInit } from '@angular/core';
import {Project} from '../models/Project';
import {ActivatedRoute, ExtraOptions, Router} from '@angular/router';
import {ProjectsService} from '../services/projects.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-project-view',
  templateUrl: './single-project-view.component.html',
  styleUrls: ['./single-project-view.component.css']
})
export class SingleProjectViewComponent implements OnInit {

  project: Project;
  projectSubscription: Subscription;

  element = document.querySelector("#container");

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.projectSubscription = this.projectService.singleProjectSubject.subscribe(
      (p: Project) => {
        this.project = p;
      }
    );
    this.projectService.getSingleProject(+id);
    this.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onBackToProjects() {
    this.router.navigate(['/Projects']);
  }

}
