import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'image-scale',
    templateUrl: './app/modals/image-scale/image-scale.modal.html'
})

export class ImageScaleModal {
    @Input() image: { width: number, height: number};
    @Output() scale = new EventEmitter<any>();

    newScale: {};
    ratio: number = 1;

    keepRatio: boolean = false;

    constructor() {
        console.log('image scale modal: ', this);
    }

    ngOnInit() {
        console.log('image in scale modal: ', this.image);
        this.ratio = this.image.width / this.image.height;
    }

    onWidthChange(event) {
        console.log('on width change: ', event);
        console.log('ratio: ', this.ratio);
        console.log('keepRatio: ', this.keepRatio)
        console.log('width: ', this.image.width);
        if (this.keepRatio) {
            this.image.height = this.image.width / this.ratio;
        }
    }

    onHeightChange(event) {
        console.log('on height change: ', event);
        console.log('height: ', this.image.height);
        if (this.keepRatio) {
            this.image.width = this.image.height * this.ratio;
        }
    }

    scaleImage() {
        console.log('scale image: ', this.image);
        this.scale.next(this.image);
        event.stopPropagation();
    }

    cancel() {
        this.scale.next('cancel');
    }

    onClick(event:Event) {
        console.log('modal click');
        event.stopPropagation();
    }

}