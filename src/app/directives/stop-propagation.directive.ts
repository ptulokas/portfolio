import {Directive} from '@angular/core';

@Directive({
    selector: '[stopPropagation]',
    events: 'stopClick($event)'
})

export class StopPropagation {
    stopClick(event:Event) {
        console.log('prevent default directive');
        event.preventDefault();
        event.stopPropagation();
    }
}