import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
    selector: 'users',
    template: `
    <div *ngFor="let user of apiService.users">
        <mat-card [routerLink]="['/profile',user._id]" style="cursor: pointer">{{user.name}}</mat-card>
    </div>
    `
})
export class UsersComponent {
    loginData = {

    }

    constructor(private apiService: ApiService) {
    }   

    ngOnInit(){
        this.apiService.getUsers();
    }
}

