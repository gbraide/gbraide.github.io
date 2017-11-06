import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';

import { ProjectService } from './project.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
 declarations: [
   AppComponent,
   ProjectsComponent,
   ProjectDetailComponent,
   ContactComponent
 ],
 providers: [ProjectService],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
