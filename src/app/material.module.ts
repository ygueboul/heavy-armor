import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule
];


@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialModule {}
