import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonPipesComponent } from './lesson-pipes/lesson-pipes.component';
import { TranslatePipe } from './lesson-pipes/translate.pipe';
import { ReversedPipe } from './lesson-pipes/reversed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LessonPipesComponent,
    TranslatePipe,
    ReversedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
