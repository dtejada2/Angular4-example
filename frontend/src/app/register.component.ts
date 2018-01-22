import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    registerData = {

    }

    constructor(private authService: AuthService) {
    }   

    post(){
        this.authService.registerUser(this.registerData);
    }
}

