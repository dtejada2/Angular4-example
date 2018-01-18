import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'register',
  template: `
    <md-card>
        <md-card-header>
            <md-card-title>
                <h4>Register new user</h4>
            </md-card-title>
        </md-card-header>
        <md-card-content>
            <form>
                <md-input-container>
                    <input [(ngModel)]="registerData.Email" name="Email" mdInput placeholder="email" type="email">
                </md-input-container>
                <md-input-container>
                    <input [(ngModel)]="registerData.password" name="password" mdInput placeholder="password" type="password">
                </md-input-container>
                <button (click)="post()" md-raised-button color="primary" >Registre</button>
            </form>
        </md-card-content>
    </md-card>
  `
})
export class RegisterComponent {
    registerData = {

    }

    constructor(private apiService: ApiService) {
    }   

    post(){
        console.log(this.registerData);
        this.apiService.sendUserregistration(this.registerData);
    }
}

