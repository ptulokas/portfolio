import {Component, ViewChild}    from 'angular2/core';
import {MenuBarComponent}        from '../../components/menu-bar/menu-bar.component';
import {ToolBarComponent}        from '../../components/tool-bar/tool-bar.component';
import {ImageComponent}          from '../../components/image/image.component';

import {FileSaveModal}          from '../../modals/file-save/file-save.modal';

import {ImageService}            from '../../services/image.service';

@Component({
    selector: 'image-editor',
    templateUrl: './app/views/image-editor/image-editor.component.html',
    directives: [MenuBarComponent, ToolBarComponent, ImageComponent],
    providers: [ImageService]
})

export class ImageEditorComponent {
    @ViewChild(MenuBarComponent) menuComponent:MenuBarComponent;
    @ViewChild(ImageComponent) imageComponent:ImageComponent;

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
            'tag'
        ];
	}

	selectTool(item) {
		console.log('image editor tool: ', item);
	}

	selectItem(item) {
		if (item.name == 'Open') {
            console.log('Open image');
            var input = document.createElement('input');
            input.onchange = () {
                this.imageName = input.files[0].name;
                this.imageService.getImageFromFile(input.files[0]).then((data) => {
                    //this.imageData = data;
                    this.imageComponent.setImage(data);
                })
            }
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/x-png, image/jpeg");
            input.click();
		} else if (item.name == "Save") {
            console.log('Save image');
            //saveAs(this.imageComponent.getImageData(), "image.jpg");
            var saveLink = document.createElement('a');
            saveLink.href = this.imageComponent.getImageData();
            saveLink.download = this.imageName;
            saveLink.target = '_blank';
            console.log(saveLink);
            saveLink.click();
        }
	}

    onClick() {
        console.log('editor click');
        this.menuComponent.dismissMenu();
    }

}