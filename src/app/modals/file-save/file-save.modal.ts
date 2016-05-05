import {Component, Input} from 'angular2/core';

@Component({
    selector: 'file-save',
    templateUrl: 'file-save.modal.html'
})

export class ImageComponent {
    @Input() imageData: {};

    showImage: false;
    canvas: false;

    constructor() {
        console.log('image: ', this);
    }

    ngOnInit() {
        this.canvas = document.getElementById('image-canvas');
    }

    setImage(data) {
        console.log('set image');
        var img = new Image();
        img.onload = () => {
            console.log('new image: ', img);
            this.canvas.width = img.width;
            this.canvas.height = img.height;
            this.canvas.getContext("2d").drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            console.log('image drawn: ', this.canvas.height);
            this.showImage = true;
        }
        img.src = data;
    }

    getImageData() {
        return this.canvas.toDataURL("image/jpeg", 1.0);
    }

}