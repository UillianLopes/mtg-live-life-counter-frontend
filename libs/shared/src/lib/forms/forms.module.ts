import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputDirective } from './input/input.directive';
import { LabelDirective } from './label/label.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputDirective,
    LabelDirective,
    ErrorComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormFieldComponent,
    InputDirective,
    LabelDirective,
    ErrorComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MtgFormsModule {}
