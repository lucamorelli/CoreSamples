import {RegisterViewModel} from 'RegisterViewModel';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client';

@autoinject
export class RegisterService {
    private url: string = "Register";

    constructor(public http: HttpClient) {

    }

    public signup(username: string, password: string, repeatPassword: string): Promise<HttpResponseMessage> {
        var model: RegisterViewModel = {
            userId: username,
            password: password, 
            repeatPassword: repeatPassword
        };
        return this.http.post(this.url + "/SignUp/", model);
    }
}