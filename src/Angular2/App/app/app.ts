import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HomeCmp} from '../views/home';
import {TodoCmp} from '../views/todo';
import {TodoService} from '../services/todo_service';
import {Cliente} from '../services/clienti_service';
import {ClientiService} from '../services/clienti_service';
import {InsAttivitaCmp} from '../views/insAttivita';

@Component({
    selector: 'app', 
    viewProviders: [TodoService],
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: HomeCmp, as: 'Home' },
    { path: '/InsAttivita', component: InsAttivitaCmp, as: 'InsAttivita' },
    { path: '/Todo', component: TodoCmp, as: 'Todo' }
])
export class AppCmp { } 