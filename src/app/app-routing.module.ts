import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonPipesComponent } from './lesson-pipes/lesson-pipes.component';

const routes: Routes = [
  { path:'pipes', component: LessonPipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
