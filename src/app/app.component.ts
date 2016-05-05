import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ImageEditorComponent} from './views/image-editor/image-editor.component';
import {GridComponent} from './views/grid/grid.component';

@Component({
	directives: [ROUTER_DIRECTIVES],
    selector: 'app',
    templateUrl: './app/app.component.html'
})

@RouteConfig([
	{ path: '/imager', name: 'ImageEditor', component: ImageEditorComponent }
	{ path: '/grid', name: 'GridComponent', component: GridComponent }
])

export class AppComponent { }