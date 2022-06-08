import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputDirective } from './input/input.directive';
import { LabelDirective } from './label/label.directive';

@NgModule({
  declarations: [FormFieldComponent, InputDirective, LabelDirective],
  imports: [CommonModule],
  exports: [FormFieldComponent, InputDirective, LabelDirective],
})
export class MtgFormsModule {}
