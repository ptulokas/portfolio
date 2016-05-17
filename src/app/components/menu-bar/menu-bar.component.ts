import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'menu-bar',
    templateUrl: './app/components/menu-bar/menu-bar.component.html',
})

export class MenuBarComponent {
    @Input() naviItems: [];

	@Output() selectItem = new EventEmitter<any>();

    constructor() {
        console.log('menu-bar items: ', this);
    }

    openNavi(event, item) {
        console.log('open navi: ', event.currentTarget);
        let rect = event.currentTarget.getBoundingClientRect();
        console.log('rect: ', rect);
        let index = this.naviItems.indexOf(item);
        //this.showMenu = index != this.currentIndex || !this.showMenu;
        this.showMenu = true;
        this.currentIndex = index;
        console.log('this.currentItem: ', this.currentItem);
        this.menuItems = item.items;
        this.menuLeft = rect.left + 'px';
        this.menuTop = rect.bottom + 'px';
        console.log('rect left: ', rect.left);
        event.preventDefault();
        event.stopPropagation();
    }

    selectMenuItem(item) {
        console.log('selectMenuItem and pass to editor');
        this.selectItem.next(item);
        this.showMenu = false;
        event.preventDefault();
        event.stopPropagation();
    }

    dismissMenu() {
        this.showMenu = false;
    }
}
