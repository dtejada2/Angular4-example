import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    messages = []
    users = []
    path = "http://localhost:3000"
    constructor( private http: HttpClient) {}

    getMessages(userId) {
        this.http.get<any>(this.path + '/posts/'+ userId).subscribe(res => {
            this.messages = res
        })
    }

    postMessage(message) {
        this.http.post<any>(this.path + '/post', message).subscribe(res => {
        })
    }

    getUsers() {
        this.http.get<any>(this.path + '/users').subscribe(res => {
            this.users = res
        })
    }

    getProfile(id) {
        return this.http.get<any>(this.path + '/profile/' + id);
    }
}