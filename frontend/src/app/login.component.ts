import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    loginData = {

    }

    constructor(private authService: AuthService) {
    }   

    post(){
        this.authService.loginUser(this.loginData);
    }
}

