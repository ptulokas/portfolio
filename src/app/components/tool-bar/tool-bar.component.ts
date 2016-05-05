import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'tool-bar',
    templateUrl: './app/components/tool-bar/tool-bar.component.html'
})

export class ToolBarComponent {
    @Input() tools: [];
    @Output() selectTool = new EventEmitter();

    selectItem(tool){
        console.log('tool selected: ', tool);
        this.selectTool.next(tool);
    }
}