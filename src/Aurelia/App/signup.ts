import {RegisterService} from 'register/RegisterService';
import {inject} from 'aurelia-dependency-injection';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(RegisterService, EventAggregator)
export class Signup {
    auth: RegisterService;
    username: string;
    password: string;
    repeatPassword: string;
    heading: string = 'Sign Up';
    eventAggregator: EventAggregator;

    constructor(auth: RegisterService, eventAggregator: EventAggregator) {
        this.auth = auth;
        this.eventAggregator = eventAggregator;
    };

    signup() {
        if (this.username == '') {
            alert('inserire la mail');
            return;
        }
        if (this.password == '') {
            alert('inserire la password');
            return;
        }
        if (this.repeatPassword == '') {
            alert('inserire la password di conferma');
            return;
        }
        if (this.password != this.repeatPassword) {
            alert('le password non corrispondono');
            return;
        }

        return this.auth.signup(this.username, this.password, this.repeatPassword)
            .then(response => {
                console.log("success logged " + response);
                this.eventAggregator.publish('authChanged');
            })
            .catch(err => {
                alert(err);
                    //console.log("login failure : " + e.message);

            });
    };
}
