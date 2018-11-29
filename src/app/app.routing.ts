import {RouterModule, Routes} from '@angular/router';
import {CourseEditorComponent} from './course-editor/course-editor.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:userId', component: CourseGridComponent},
  {path: 'user/:userId/course/:courseId', component: CourseEditorComponent},
  {path: 'user/:userId/course/:courseId/module/:moduleId', component: CourseEditorComponent},
  {path: 'user/:userId/course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseEditorComponent},
  {path: 'user/:userId/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseEditorComponent},
  {path: 'user/:userId/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseEditorComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
