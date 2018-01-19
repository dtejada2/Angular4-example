import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    messages = []
    users = []
    path = "http://localhost:3000"
    constructor( private http: Http) {}

    getMessages() {
        this.http.get(this.path + '/posts').subscribe(res => {
            this.messages = res.json()
        })
    }

    postMessage(message) {
        this.http.post(this.path + '/post', message).subscribe(res => {
        })
    }

    getUsers() {
        this.http.get(this.path + '/users').subscribe(res => {
            this.users = res.json()
        })
    }

    getProfile(id) : Observable<any>  {
        return this.http.get(this.path + '/profile/' + id);
    }
}