import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CropperComponent } from '../cropper/cropper.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  croppedImage: any = '';

  imageChangedEvent: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.openCropperDialog()

  }


  openCropperDialog() {
    const dialogRef = this.dialog.open(CropperComponent, {
      width: '720px',
      data: { "event": this.imageChangedEvent,"aspectRatio":16/9,"maintainAspectRatio":true}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.croppedImage = result;
    });
  }

 
}
