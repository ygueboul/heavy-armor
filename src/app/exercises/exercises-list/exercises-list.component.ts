import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent implements OnInit {
  exercises: Array<Exercise[]>;
  bodys: String[];
  expand = 0;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.getAllExercises();
    this.bodys = this.exerciseService.getAllBodys();
  }

}
