import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  @Input("photos")
  imageList: string[] = []

  @Output("on-navigate")
  emitter = new EventEmitter

  currentIndex = 0
  
  moveNext(){
    if (this.currentIndex < this.imageList.length - 1) {
      this.currentIndex += 1
      this.emitter.emit(this.currentIndex)
    }
  }

  movePrevious(){
    if(this.currentIndex > 0) {
      this.currentIndex -= 1
      this.emitter.emit(this.currentIndex)
    }
  }


}
