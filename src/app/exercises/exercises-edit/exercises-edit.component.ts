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
  deletable = false; // new = false / edit = false
  idBody;
  idExercise;
  selected = 0; // partie du corps sans le menu select


  constructor(private exerciseService: ExerciseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bodys = this.exerciseService.getAllBodys(); // for build select option

    // modification
    this.idBody = this.route.snapshot.paramMap.get('idBody');
    this.idExercise = this.route.snapshot.paramMap.get('idExercise');

    if (this.idBody && this.idExercise && this.exerciseService.isExerciseDeletable(this.idBody, this.idExercise)) {
      this.selected = this.idBody; // il ajoute la valeur du body dans le select a modifier mais probleme il ne l'affiche pas
      // console.log(this.selected);

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

  onSubmit(FormExercise) {
    if (!this.deletable) {
      // add newexercise
      this.exerciseService.addNewExercise(FormExercise);
    } else {
      // edit exercise
      this.exerciseService.updateExercise(this.idBody, FormExercise);
    }
    this.goToExercises(FormExercise.idBody);
  }

  deleteExercise(): void {
    this.exerciseService.deleteExercise(this.idBody, this.idExercise);
    this.goToExercises(this.idBody);
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

  goToExercises (idBody?) {
    this.exerciseService.setExpandPanel(idBody);
    this.router.navigate(['/exercises']);
  }

}
