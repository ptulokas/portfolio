import {bootstrap}			from 'angular2/platform/browser';
import {AppComponent}		from './app/app.component';
import {ROUTER_PROVIDERS} 	from 'angular2/router';
import {provide}			from 'angular2/core';
import {LocationStrategy,
	HashLocationStrategy} 	from 'angular2/platform/common';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);