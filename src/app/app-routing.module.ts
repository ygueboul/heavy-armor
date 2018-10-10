import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* component */
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExercisesEditComponent } from './exercises/exercises-edit/exercises-edit.component';
import { TrainingEditComponent } from './training/training-edit/training-edit.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'training/new', component: TrainingEditComponent },
  { path: 'training/edit', component: TrainingEditComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercises/new', component: ExercisesEditComponent },
  { path: 'exercises/edit/:idBody/:idExercise', component: ExercisesEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
