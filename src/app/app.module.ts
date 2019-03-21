import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProjectViewComponent } from './single-project-view/single-project-view.component';

const appRoutes = [
  { path : 'AboutMe', component : AboutMeComponent },
  { path : 'Projects', component : ProjectListComponent },
  { path : 'Contact', component : ContactComponent },
  { path : 'Resume', component : MyResumeComponent},
  { path : 'Projects/:id', component : SingleProjectViewComponent},
  { path: '', redirectTo: 'AboutMe', pathMatch: 'full' },
  { path: '**', redirectTo: 'AboutMe' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    MyResumeComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ContactComponent,
    SingleProjectViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
