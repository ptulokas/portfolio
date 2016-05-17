import {Component, ViewChild}    from '@angular/core';
import {MenuBarComponent}        from '../../components/menu-bar/menu-bar.component';
import {ToolBarComponent}        from '../../components/tool-bar/tool-bar.component';
import {ImageComponent}          from '../../components/image/image.component';

import {ModalContainer}          from '../../components/modal-container/modal-container.component';

import {ImageService}            from '../../services/image.service';

console.log('menubar component: ', MenuBarComponent);
console.log('toolbar component: ', ToolBarComponent);
console.log('modal container: ', ModalContainer);
console.log('image component: ', ImageComponent);
console.log('image service: ', ImageService);

@Component({
    selector: 'image-editor',
    templateUrl: './app/views/image-editor/image-editor.component.html',
    directives: [MenuBarComponent, ToolBarComponent, ImageComponent, ModalContainer],
    providers: [ImageService]
})

export class ImageEditorComponent {
    @ViewChild(MenuBarComponent) menuComponent:MenuBarComponent;
    @ViewChild(ToolBarComponent) toolComponent:ToolBarComponent;
    @ViewChild(ImageComponent) imageComponent:ImageComponent;

    @ViewChild(ModalContainer) modalContainer:ModalContainer;

    showTools: boolean = true;
    tools: Array<any> = [];
    naviItems: Array<any> = [];
    imageName: String = '';

    constructor() {
        this.imageService = new ImageService();
        console.log('this image service in editor constructor: ', this.imageService);
        this.naviItems = [
            {
                name: 'File',
                items: [
        			{ name: 'Open' },
        			{ name: 'Save' },
                    { name: 'Share'},
                    { name: 'Import'}
                ]
            },
            {
                name: 'Edit',
                items: [
                    { name: 'Scale' }
                ]
            },
            {
                name: 'View',
                items: [
                    { name: 'Hide Tools' }
                ]
            },
            {
                name: 'Help',
                items: [
                    { name: 'About' }
                ]
            }
        ];

        this.tools = [
            'crop',
            'mouse-pointer',
            'paint-brush',
            'pencil-square-o',
            'search-minus',
            'search-plus',
            'tag'

        ];

        console.log('this image component: ', this.imageComponent);
        console.log('this modal container: ', this.modalContainer);
    }

    selectTool(item) {
        console.log('image editor tool: ', item);
    }

    selectItem(item) {
        switch(item.name) {
            case 'Open':
                console.log('Open image');
                var input = document.createElement('input');
                var setImage = () => {
                    console.log('input onchange');
                    this.imageName = input.files[0].name;
                    this.imageService.getImageFromFile(input.files[0]).then((data) => {
                        //this.imageData = data;
                        console.log("image data in editor");
                        this.imageComponent.setImage(data);
                    })
                }
                var checkFiles = () => {
                    if (input.files && input.files.length > 0) {
                        console.log('file!')
                        setImage();
                    } else {
                        console.log('no file :(');
                        setTimeout(checkFiles, 1000);
                    }
                }

                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/x-png, image/jpeg");
                input.click();
                console.log('open clicked');
                checkFiles();
                break;
            case "Save":
                console.log('Save image');
                this.modalContainer.openModal('save', { name: this.imageName, data: this.imageComponent.getImageData() });
                break;
            case "Scale":
                this.modalContainer.openModal('scale', this.imageComponent.getImageScale());
                break;
            case "Hide Tools":
                console.log('image editor hide tools');
                item.name = "Show Tools";
                this.toolComponent.hideTools();
                console.log('naviItems after hide: ', this.naviItems);
                break;
            case "Show Tools":
                console.log('image editor show tools');
                item.name = "Hide Tools";
                this.toolComponent.showTools();
                console.log('naviItems after show: ', this.naviItems);
                break;
        }
    }

    onModalEvent(event) {
        console.log('modal callback: ', event);
        switch(event.event) {
            case 'scale':
                this.imageComponent.scaleImage(event.data);
                break;
        }
    }

    onScale(scale) {
        console.log('editor on scale: ', scale);
    }

    onClick() {
        console.log('editor click');
        this.menuComponent.dismissMenu();
    }
}
console.log('end of imageeditor');
