import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* material module */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
/* routing module */
import { AppRoutingModule } from './app-routing.module';
/* component */
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TrainingComponent } from './training/training.component';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { ExercisesComponent } from './exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    TrainingComponent,
    TrainingListComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
