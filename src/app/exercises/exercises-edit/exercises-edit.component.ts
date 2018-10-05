import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises-edit',
  templateUrl: './exercises-edit.component.html',
  styleUrls: ['./exercises-edit.component.scss']
})
export class ExercisesEditComponent implements OnInit {
  bodys: String[];

  constructor(private exerciseService: ExerciseService, private router: Router) { }

  ngOnInit() {
    this.bodys = this.exerciseService.getAllBodys();
  }

  onSubmit(form) {
    console.log(form);
    this.exerciseService.addExercise(form);
    this.goToExercises();
  }

  goToExercises () {
    this.router.navigate(['/exercises']);
  }

}
