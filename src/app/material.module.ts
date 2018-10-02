import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatExpansionModule } from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatExpansionModule
];


@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialModule {}
