import {Injectable, EventEmitter} from '@angular/core';

@Injectable()

export class ImageService {
    emitter: EventEmitter<any> = new EventEmitter();
    constructor() {
        console.log('image service constructor');
    }

    getImageFromFile(file) {
        console.log('image service getimagefromfile');
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onload = (e) => {
                console.log('reader on load, resolve promise');
                resolve(e.target.result);
            }
            reader.readAsDataURL(file);
        })
    }

    scaleImage(imageData, width, height, keepRatio) {
        var img = new Image();
        img.src = imageData;
        return "";
    }
}