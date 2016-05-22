
import {Component} from '@angular/core';
import {XLarge} from '../directives/XLarge';

    @Component({
        directives: [XLarge],
        selector: 'home',
        templateUrl: './views/home.html',
        styleUrls: ['./views/home.css']
    })
    export class HomeCmp { }
