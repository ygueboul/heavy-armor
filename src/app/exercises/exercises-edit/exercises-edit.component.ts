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
  deletable = false;
  sub: any;


  constructor(private exerciseService: ExerciseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bodys = this.exerciseService.getAllBodys(); // for build select elements

    const idBody = this.route.snapshot.paramMap.get('idBody');
    const idExercise = this.route.snapshot.paramMap.get('idExercise');

    if (idBody && idExercise && this.exerciseService.isExerciseDeletable(idBody, idExercise)) {
      this.deletable = this.exerciseService.isExerciseDeletable(idBody, idExercise);
      this.exercise = this.exerciseService.getExerciseById(idBody, idExercise);
    }

    // version async abservable avec firebase
    // this.sub = this.route.params.subscribe(params => {
    //   const idBody = params['idBody'];
    //   const idExercise  = params['idExercise'];

    //   this.exerciseService.getExerciseById(idBody, idExercise).subscribe(exercise => this.exercise = exercise);
    // });
  }

  onSubmit(form) {
    if (!this.deletable) {
      this.exerciseService.addNewExercise(form);
      alert('ajouter');
    } else {
      // edit exercise
      alert('modifier');
    }

    this.goToExercises();
  }

  deleteExercise() {
    // delete exercise
    alert('effacer');
    this.goToExercises();
  }

  goToExercises () {
    this.router.navigate(['/exercises']);
  }

}
