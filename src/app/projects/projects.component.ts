import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects);
  }
}
