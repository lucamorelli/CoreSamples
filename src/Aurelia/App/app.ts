import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'bluebird';
// jspm install css=github:systemjs/plugin-css

// ! means you want to load something using a plugin. If nothing is after the !, it means use the file extension as the plugin name - so it looks for a module called css
//you need to install the css plugin or use the text loader
//jspm install css= github:systemjs / plugin - css
//or you can use the text loader by putting < require from= "bootstrap/css/bootstrap.css" > in your app.html

import {Router} from 'aurelia-router';
import {RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router; 
    
    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia'; 
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome', settings: 'none' },
            { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr', settings: 'none' }, 
            { route: 'attivita', name: 'attivita', moduleId: './InsAttivita', nav: true, title: 'Attività', settings: 'manage' }, 
            { route: 'diario', name: 'diario', moduleId: './InsDiario', nav: true, title: 'Diario', settings: 'manage' }, 
            { route: 'spesa', name: 'spesa', moduleId: './InsSpesa', nav: true, title: 'Spesa', settings: 'manage' }, 
            { route: 'fattura', name: 'fattura', moduleId: './InsFattura', nav: true, title: 'Fattura', settings: 'manage' }, 
            { route: 'pagamento', name: 'pagamento', moduleId: './InsPagamento', nav: true, title: 'Pagamento', settings: 'manage' }, 
            { route: 'commessa', name: 'commessa', moduleId: './InsCommessa', nav: true, title: 'Commessa', settings: 'manage' }, 
            { route: 'child-router', name: 'childRouter', moduleId: './child-router', nav: true, title: 'Child Router', settings: 'none'  },
            { route: 'ricerca', name: 'ricerca', moduleId: './ricerca', nav: true, title: 'Ricerca', settings: 'report' },
            { route: 'riepilogo', name: 'riepilogo', moduleId: './riepilogo', nav: true, title: 'Riepilogo', settings: 'report' },
            { route: 'ricercaDiario', name: 'ricercaDiario', moduleId: './ricercaDiario', nav: true, title: 'Diario', settings: 'report' }
        ]);

        this.router = router;
    }
}
