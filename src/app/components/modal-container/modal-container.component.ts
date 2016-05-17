import {Component, ViewChild, Input, Output, EventEmitter} from '@angular/core'; //, DynamicComponentLoader, ElementRef} from '@angular/core';

import {FileSaveModal} from '../../modals/file-save/file-save.modal';
import {ImageScaleModal} from '../../modals/image-scale/image-scale.modal';

@Component({
    selector: 'modal-container',
    templateUrl: './app/components/modal-container/modal-container.component.html',
    directives: [FileSaveModal, ImageScaleModal],
    //providers: [DynamicComponentLoader]
})

export class ModalContainer {
    @Input() modal: {};
    @Output() modalEvent = new EventEmitter<any>();

    @ViewChild(FileSaveModal) fileSaveModal:FileSaveModal;

    showModal: boolean = false;

    currentModal: String = '';
    currentData: Object = {};

    // TODO: see why DynamicComponentLoader is not working at all
    //constructor(private dynamicComponentLoader: DynamicComponentLoader, private elementRef: ElementRef) {
    constructor() {
        //console.log('dyn c l: ', dynamicComponentLoader);
        //console.log('modal container dcl: ', this.dynamicComponentLoader);
        //console.log('modal container elementRef', elementRef);
    }

    openModal(modalName, data) {
        console.log('open Modal: ', modalName);
        switch(modalName) {
            case 'save':
                this.currentData = data;
                break;
            case 'scale':
                this.currentData = data;
                break;
        }
        this.showModal = true;
        this.currentModal = modalName;
    }


    onScale(scale) {
        console.log('scale from modal container: ', scale);
        if (scale == 'cancel') {
            this.dismissModal("")
            return;
        }
        this.modalEvent.next({ event: 'scale', data: scale });
        this.dismissModal('dismiss');
    }

    onClick(){
        console.log('modal container click');
    }

    dismissModal(event) {
        console.log('dismissmodal: ', event);
        this.showModal = false;
        this.currentModal = "";
    }
}