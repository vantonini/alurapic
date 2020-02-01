import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";

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
    private photoService: PhotoService
    ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhoto(this.photoId)
    .subscribe(() => this.router.navigate(['']));
  }
}