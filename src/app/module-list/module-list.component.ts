import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ModuleServiceClient} from '../service/module.service.client.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  moduleId;
  course = {courseId: ''};
  userId;

  constructor(private activatedRoute: ActivatedRoute,
              private service: ModuleServiceClient) {
  }

  setCourseDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.course.courseId = params['courseId'];
      this.service.findAllModulesForCourse(this.course.courseId)
        .then(modules => this.modules = modules);
    });
  }

  ngOnInit() {
  this.setCourseDetails();
  }

}
