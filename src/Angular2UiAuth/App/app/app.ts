import {Component, ViewEncapsulation, provide} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HomeCmp} from '../views/home';
import {TodoCmp} from '../views/todo';
import {TodoService} from '../services/todo_service';
import {Cliente} from '../services/clienti_service';
import {ClientiService} from '../services/clienti_service';
import {InsAttivitaCmp} from '../views/insAttivita';
import {Login} from '../views/login';
import {Signup} from '../views/signup';
import {NG2_UI_AUTH_PROVIDERS} from 'ng2-ui-auth';
import {HTTP_PROVIDERS} from '@angular/http';

const GOOGLE_CLIENT_ID = 'my_client_id.apps.googleusercontent.com';

@Component({
    selector: 'app', 
    providers: [
        ROUTER_PROVIDERS,
        provide(ROUTER_PRIMARY_COMPONENT, { useFactory: () => AppCmp }),
        HTTP_PROVIDERS,
        NG2_UI_AUTH_PROVIDERS({ providers: { google: { clientId: GOOGLE_CLIENT_ID } } }),
    ],
    viewProviders: [TodoService],
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [Login, ROUTER_DIRECTIVES],
})
@RouteConfig([
    { path: '/', component: HomeCmp, name: 'Home' },
    { path: '/InsAttivita', component: InsAttivitaCmp, name: 'InsAttivita' },
    { path: '/Todo', component: TodoCmp, name: 'Todo' },
    { path: '/login', name: 'Login', component: Login, useAsDefault: true },
    { path: '/signup', name: 'Signup', component: Signup},
])
export class AppCmp { } 