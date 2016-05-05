import {Injectable} from 'angular2/core';

@Injectable()

export class ImageService {
    constructor() {
        console.log('image service constructor');
    }

    getImageFromFile(file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onload = (e) => {
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