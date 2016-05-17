import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'tool-bar',
    templateUrl: './app/components/tool-bar/tool-bar.component.html'
})

export class ToolBarComponent {
    @Input() tools: [];
    @Output() selectTool = new EventEmitter();

    show: boolean = true;

    selectItem(tool) {
        console.log('tool selected: ', tool);
        this.selectTool.next(tool);
    }

    hideTools() {
        this.show = false;
    }

    showTools() {
        this.show = true;
        console.log('show tools: ', this.tools);
    }
}