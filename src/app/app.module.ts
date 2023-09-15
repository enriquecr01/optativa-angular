import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonPipesComponent } from './lesson-pipes/lesson-pipes.component';
import { TranslatePipe } from './lesson-pipes/translate.pipe';
import { ReversedPipe } from './lesson-pipes/reversed.pipe';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LessonPipesComponent,
    TranslatePipe,
    ReversedPipe,
    DependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
