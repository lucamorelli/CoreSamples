import {Component, AfterContentInit, ElementRef, Renderer, OnInit} from '@angular/core';
import {FormBuilder, ControlGroup, Control, Validators} from '@angular/common';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Auth} from 'ng2-ui-auth';
import {NgMessages} from '../helpers/ngMessages';
import {EmailValidator} from '../helpers/customValidators';

/**
 * Created by Ron on 18/12/2015.
 */

@Component({
    selector: 'app-login',
    templateUrl: './views/login.html',
    directives: [NgMessages, ROUTER_DIRECTIVES, EmailValidator],
})
export class Login implements AfterContentInit, OnInit {
    user = { email: '', password: '' };
    form: ControlGroup;

    login() {
        this.auth.login(this.user)
            .subscribe(() => this.goToMain());
    }

    authenticate(provider: string) {
        this.auth.authenticate(provider)
            .subscribe(() => this.goToMain());
    }

    goToMain() {
        this.router.navigate(['Main']);
    }

    ngAfterContentInit() {
        this.renderer.setElementClass(this.element.nativeElement, 'app', true);
        if (this.auth.isAuthenticated()) {
            this.goToMain();
        }
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: new Control('', Validators.compose([Validators.required, EmailValidator.validate])),
            password: new Control('', Validators.required)
        });
    }

    constructor(private auth: Auth,
        private router: Router,
        private element: ElementRef,
        private renderer: Renderer,
        private fb: FormBuilder) {
    }
}