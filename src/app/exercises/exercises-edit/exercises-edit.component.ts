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
  idBody;
  idExercise;

  selected;


  constructor(private exerciseService: ExerciseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bodys = this.exerciseService.getAllBodys(); // for build select elements
    this.selected = this.bodys[0];

    this.idBody = this.route.snapshot.paramMap.get('idBody');
    this.idExercise = this.route.snapshot.paramMap.get('idExercise');

    if (this.idBody && this.idExercise && this.exerciseService.isExerciseDeletable(this.idBody, this.idExercise)) {
      this.deletable = this.exerciseService.isExerciseDeletable(this.idBody, this.idExercise);
      this.exercise = this.exerciseService.getExerciseById(this.idBody, this.idExercise);
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

  deleteExercise(): void {
    this.exerciseService.deleteExercise(this.idBody, this.idExercise);
    this.goToExercises();
    // if (confirm("Are you sure you want to delete " + employee.Name + "?")) {
    //   this._employeeService.DeleteEmployee(employee.EmployeeId).subscribe(
    //      data => {
    //        // refresh the list
    //        this.GetEmployee();
    //        return true;
    //      },
    //      error => {
    //        console.error("Error deleting Employee!");
    //      }
    //   );
    // }
  }

  goToExercises () {
    this.router.navigate(['/exercises']);
  }

}
