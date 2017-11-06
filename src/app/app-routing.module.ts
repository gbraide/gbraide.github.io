import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'contact',     component: ContactComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}