import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../service/course.service.client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  logged;
  constructor(private service: CourseServiceClient, private activatedRoute: ActivatedRoute) { }
  userId;
  courses =  [];

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['userId'];
        this.service.findAllCourses(parseInt(params.userId))
      .then(courses => this.courses = courses)});

  }

}
