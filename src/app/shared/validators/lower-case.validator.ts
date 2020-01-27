import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {
  
  if (control.value.trim() && !(/^[a-z0-9_\-]+$/).test(control.value)) {
    // if it's not blank && not using the pattern specified, then THERE IS A PROBLEM (true)
    return { lowerCase: true } 
  }
  return null;
}