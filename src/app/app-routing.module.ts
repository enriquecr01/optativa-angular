import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonPipesComponent } from './lesson-pipes/lesson-pipes.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

const routes: Routes = [
  { path:'pipes', component: LessonPipesComponent },
  { path:'dependency-injection', component: DependencyInjectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
