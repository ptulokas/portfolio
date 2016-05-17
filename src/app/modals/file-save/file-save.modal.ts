import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'file-save',
    templateUrl: './app/modals/file-save/file-save.modal.html'
})

export class FileSaveModal {
    @Input() fileData: {};
    @Output() dismissModal = new EventEmitter();

    constructor() {
        console.log('file save modal: ', this);
    }

    saveImage() {
        var saveLink = document.createElement('a');
        saveLink.href = this.fileData.data;
        saveLink.download = this.fileData.name;
        console.log(saveLink);
        saveLink.click();
        this.dismissModal.next('dismiss');
    }

    cancel() {
        this.dismissModal.next('dismiss');
    }

    onClick(event:Event) {
        console.log('modal click');
        event.stopPropagation();
    }

}