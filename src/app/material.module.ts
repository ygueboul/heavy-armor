import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule
];


@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialModule {}
