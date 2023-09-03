import { Component, OnInit } from '@angular/core';
import myLocaleEs from '@angular/common/locales/es'
import {registerLocaleData} from '@angular/common';

registerLocaleData(myLocaleEs);

@Component({
  selector: 'app-lesson-pipes',
  templateUrl: './lesson-pipes.component.html',
  styleUrls: ['./lesson-pipes.component.css']
})
export class LessonPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
