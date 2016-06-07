import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppCmp} from './app/app';
import {HTTP_PROVIDERS} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';


bootstrap(AppCmp, [  
    ROUTER_PROVIDERS, HTTP_PROVIDERS  
]).catch(err => console.error(err));