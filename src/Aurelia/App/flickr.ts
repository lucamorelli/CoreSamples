import {inject} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

//@inject(HttpClient)
@autoinject
export class Flickr {
    heading = 'Flickr';
    images = [];
    url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
//    http: HttpClient;

    constructor(public http:HttpClient){
//    constructor(http: HttpClient) {
    //    this.http = http;
    } 

    activate() {
        return this.http.jsonp(this.url).then(response => {
            this.images = response.content.items;
        });
    }

    canDeactivate() {
        return confirm('Are you sure you want to leave?');
    }
}