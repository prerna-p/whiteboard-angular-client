import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../service/course-service-client.service';
import {ActivatedRoute, Params} from '@angular/router';
import {User} from '../models/user.model.client';
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
  user: User = new User();

  setCourseDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.course.courseId = params['courseId'];
    });

    this.service.findCourseById(this.course.courseId)
      .then(course => this.course.title = course.title);
  }


  ngOnInit() {
    this.userService
      .profile()
      .then(user => this.user = user);

    this.service.findCourseById(this.course.courseId)
      .then(course => this.course = course);
  }

}
