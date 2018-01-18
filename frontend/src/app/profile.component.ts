import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'profile',
    template: `
    <md-card>
        <md-card-header>
            <md-card-title>
                <h4>profile</h4>
            </md-card-title>
        </md-card-header>
        <md-card-content>
           <md-list>
                <md-list-item>Name: Tim</md-list-item>
                <md-list-item>Email: {{profile.Email}}</md-list-item>
           </md-list>
        </md-card-content>
    </md-card>
    `
})
export class ProfileComponent {
    constructor(private apiService: ApiService,
                private activatedRoute: ActivatedRoute) {
    }   

    profile

    ngOnInit(){
        var id = this.activatedRoute.snapshot.params.id;
        this.apiService.getProfile(id).subscribe(data=>{
            this.profile = data.json();
        })
    }
}

