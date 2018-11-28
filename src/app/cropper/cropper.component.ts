import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {

  croppedImage:any;
  aspectRatio:any=1;
  maintainAspectRatio:any=false;
  imageChangedEvent:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CropperComponent>) { 
    console.log(data);
    this.imageChangedEvent = data.event;
    if(data.aspectRatio){
      this.aspectRatio = data.aspectRatio;
    }
    if(data.maintainAspectRatio){
      console.log();
      
      this.maintainAspectRatio=data.maintainAspectRatio;
    }
  }

  
  ngOnInit() {
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;

  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }
  closeDialog() {
    this.dialogRef.close(this.croppedImage);
  }

}
