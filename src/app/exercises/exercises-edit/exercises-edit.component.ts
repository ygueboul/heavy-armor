import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercises-edit',
  templateUrl: './exercises-edit.component.html',
  styleUrls: ['./exercises-edit.component.scss']
})
export class ExercisesEditComponent implements OnInit {
  bodys: String[];
  exercise: Exercise;

  constructor(private exerciseService: ExerciseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bodys = this.exerciseService.getAllBodys(); // for build select elements

    const idBody = this.route.snapshot.paramMap.get('idBody');
    const idExercise = this.route.snapshot.paramMap.get('idExercise');


    if (idBody && idExercise && this.exerciseService.isExerciseDeletable(idBody, idExercise)) {
        this.exercise = this.exerciseService.getExerciseById(idBody, idExercise);
        console.log(this.exercise);
    }
  }

  onSubmit(form) {
    this.exerciseService.addExercise(form);
    this.goToExercises();
  }

  goToExercises () {
    this.router.navigate(['/exercises']);
  }

}
