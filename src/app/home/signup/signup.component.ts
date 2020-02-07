import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { NewUser } from "./new-user";
import { SignUpService } from "./signup.service";
import { userNamePassword } from "./username-password.validator";

@Component({
  // won't give a selector because I won't use it in another template
  // it has page scope
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit{
  
  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) {
    
  }
  ngOnInit(): void {
    const fn = this.userNotTakenValidatorService.checkUserNameTaken(); // will return a function
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      userName: ['', [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(2), 
        Validators.maxLength(40)
      ],
      this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      fullName: ['', [
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(30)
    ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8), 
        Validators.maxLength(14)
      ]],
    },
    {
      validator: userNamePassword
    });
    this.platformDetectorService.isPlatformBrowser() &&
    this.emailInput.nativeElement.focus();
  }
  
  signup() {
    if(this.signupForm.valid && !this.signupForm.pending) {
      const newUser: NewUser = this.signupForm.getRawValue();
      this.signUpService.signup(newUser)
      .subscribe( () => this.router.navigate(['']),
        err => console.log(err)
      );
    }
  }
}