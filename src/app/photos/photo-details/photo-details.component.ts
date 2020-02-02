import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { AlertService } from "../../shared/alert/alert.service";
import { UserService } from "../../core/user/user.service";

@Component({
  // selector: 'ap-photo-details', // page scope, I don't need to include
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
 
  photo$: Observable<Photo>;
  photoId: number;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => {}, err => {
      this.router.navigate(['not-found']);
    })
  }

  remove() {
    this.photoService.removePhoto(this.photoId)
    .subscribe(() => {
      this.alertService.success("Image removed.", true)
      this.router.navigate(['/user', this.userService.getUserName()])
    },
    err => {
      this.alertService.warning("Could not delete this picture.")
    });  
  }

  like(photo: Photo) {
    this.photoService.like(photo.id)
    .subscribe(liked => {
      if(liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    })
  }

}