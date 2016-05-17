import _                                   from 'lodash';
import {Component, Input, EventEmitter}    from '@angular/core';


@Component({
    selector: 'image',
    templateUrl: './app/components/image/image.component.html'
})

export class ImageComponent {
    imageData: {};
    showImage: false;
    canvas: false;

    constructor() {
        console.log('image: ', this);
    }

    setImage(data) {
        console.log('image component - set image');
        let img = new Image();
        let canvas =  document.getElementById('image-canvas');
        this.imageData = _.clone(data);
        img.onload = () => {
            console.log('new image loaded');
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
            console.log('image drawn: ', this.canvas.height);
            this.showImage = true;
        }
        img.src = this.imageData;
        this.canvas = canvas;
    }

    scaleImage(scale) {
        console.log('scale image to: ', scale);
        console.log('canvas: ', this.canvas);
        let canvas = document.getElementById('image-canvas');
        let img = new Image();
        img.onload = () => {
            console.log('scale image on load');
            canvas.width = scale.width;
            canvas.height = scale.height;
            this.canvas.getContext("2d").drawImage(img, 0, 0, scale.width, scale.height);
        }
        console.log(this.imageData);
        img.src = this.imageData;
    }

    getImageScale() {
        console.log('image for scale: ', this.image);
        return { width: this.canvas.width, height: this.canvas.height };
    }

    getImageData() {
        return this.canvas.toDataURL("image/jpeg", 1.0);
    }

}