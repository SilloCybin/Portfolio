import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent implements OnInit {

  @Input() titre;
  @Input() description;
  @Input() technologies;
  @Input() learned;
  @Input() id;

  isOverProject = false;
  isOverSeeMore = false;
  isOverGoToRepo = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  overProject(){
    this.isOverProject = true;
  }

  leftProject(){
    this.isOverProject = false;
  }

  onProjectClick(){
    this.isOverProject = !this.isOverProject;
  }

  overSeeMore(){
    this.isOverSeeMore = true;
  }

  leftSeeMore(){
    this.isOverSeeMore = false;
  }

  onSeeMoreClick(){
    this.isOverSeeMore = !this.isOverSeeMore;
    this.router.navigate(['/Projects', (this.id-1)]);
  }

  overGoToRepo(){
    this.isOverGoToRepo = true;
  }

  leftGoToRepo(){
    this.isOverGoToRepo = false;
  }

  onGoToRepoClick(){
    this.isOverGoToRepo = !this.isOverGoToRepo;
  }

}
