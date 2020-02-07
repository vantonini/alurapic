import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";


import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";
import { AlertService } from "../../shared/alert/alert.service";

@Component({
  templateUrl: './signin.component.html' // since I'm not using as element, I'll use in another page, I don't need selector
})
export class SignInComponent implements OnInit{
  
  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService ) { }
  
  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => this.fromUrl = params['fromUrl']);


   this.loginForm = this.formBuilder.group({
     userName: ['', Validators.required],
     password: ['', Validators.required]
   });
   this.platformDetectorService.isPlatformBrowser() &&
   this.userNameInput.nativeElement.focus();
    
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    
    this.authService.authenticate(userName, password)
    .subscribe( () => this.fromUrl
                      ? this.router.navigateByUrl(this.fromUrl)
                      : this.router.navigate(['user', userName])
      ,                
      err => {
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
        this.alertService.danger("Invalid username or password", true);
    });
  }

 }