import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of apiService.messages">
          <md-card>{{message.msg}}</md-card>
        </div>
    `
})
export class MessagesComponent {
    constructor(private apiService: ApiService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        var userId = this.activatedRoute.snapshot.params.id;
        this.apiService.getMessages(userId);
    }
}
