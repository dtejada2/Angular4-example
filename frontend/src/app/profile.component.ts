import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'profile',
    templateUrl: 'Profile.component.html'
})
export class ProfileComponent {
    profile

    constructor(private apiService: ApiService,
                private activatedRoute: ActivatedRoute) {
    }   

    ngOnInit(){
        var id = this.activatedRoute.snapshot.params.id;
        this.apiService.getProfile(id).subscribe(data=>{
            this.profile = data.json();
        })
    }
}

