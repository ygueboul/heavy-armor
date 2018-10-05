import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* component */
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExercisesEditComponent } from './exercises/exercises-edit/exercises-edit.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercises/edit/:id', component: ExercisesEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
