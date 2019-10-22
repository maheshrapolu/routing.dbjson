import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeoneComponent } from './homeone/homeone.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'homeone', component: HomeoneComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'courses', component: CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
