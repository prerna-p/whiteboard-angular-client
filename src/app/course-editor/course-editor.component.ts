import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../service/course.service.client.service';
import {ActivatedRoute, Params} from '@angular/router';
import {UserServiceClient} from '../service/user.service.client';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {
  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.setCourseDetails();
  }
  course = {courseId: '', title: ''};

  setCourseDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      (this.service.findCourseById(parseInt(params.userId), parseInt(params.courseId)))
        .then(course => {this.course.title = course.title; this.course.courseId = params['courseId']; });
    });

  }


  ngOnInit() {
    this.setCourseDetails()

  }

}
