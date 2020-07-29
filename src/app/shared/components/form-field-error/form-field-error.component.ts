import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger">
      {{ errorMessage }}
    </p>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input() controlName: FormControl;

  constructor() { }

  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if (this.mustShowErrorMessage()) {
      return this.getErrorMessage();
    } else {
      return null;
    }
  }

  private mustShowErrorMessage(): boolean {
    return this.controlName.invalid && this.controlName.touched;
  }

  private getErrorMessage(): string | null {
    if (this.controlName.errors.required) {
      return 'Dado obrigatório!';
    } else if (this.controlName.errors.minlength) {
      const requiredLength = this.controlName.errors.minlength.requiredLength;
      return `Deve ter no mínimo ${requiredLength} caracteres`;
    } else if (this.controlName.errors.maxlength) {
      const requiredLength = this.controlName.errors.maxlength.requiredLength;
      return `Deve ter no máximo ${requiredLength} caracteres`;
    } else if (this.controlName.errors.email) {
      return 'Formato de e-mail inválido';
    }
  }

}
