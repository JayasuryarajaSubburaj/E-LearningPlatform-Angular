import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { McqQuestionsComponent } from './mcq-questions/mcq-questions.component';
import { McqCComponent } from './mcq-c/mcq-c.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AboutDetailsComponent } from './about-details/about-details.component';
import { McqJavaComponent } from './mcq-java/mcq-java.component';
import { McqHtmlComponent } from './mcq-html/mcq-html.component';
import { McqJavascriptComponent } from './mcq-javascript/mcq-javascript.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  { path: 'mcq-questions', component: McqQuestionsComponent },
  {path:'about',component:AboutComponent},
  { path: 'mcq-c', component: McqCComponent },
  { path: 'contact-details', component: ContactDetailsComponent },
  { path: 'about-details', component: AboutDetailsComponent },
  { path: 'mcq-java', component: McqJavaComponent },
  { path: 'mcq-html', component: McqHtmlComponent },
  { path: 'mcq-javascript', component: McqJavascriptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
