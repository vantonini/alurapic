import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";
import { Observable } from "rxjs";

@Component({
  // selector: 'ap-photo-details', // page scope, I don't need to include
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
 
  photo$: Observable<Photo>;
  photoId: number;
  
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }
}