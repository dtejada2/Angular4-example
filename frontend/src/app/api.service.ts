import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    messages = []
    users = []

    constructor( private http: Http) {}

    getMessages() {
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.messages = res.json()
        })
    }

    getUsers() {
        this.http.get('http://localhost:3000/users').subscribe(res => {
            this.users = res.json()
        })
    }

    getProfile(id) : Observable<any>  {
        return this.http.get('http://localhost:3000/profile/' + id);
    }
}