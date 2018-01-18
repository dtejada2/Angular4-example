import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MdButtonModule, MdCardModule, MdToolbarModule, MdInputModule} from '@angular/material'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component';

const routes= [
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    MdButtonModule, 
    MdCardModule, 
    MdToolbarModule, 
    RouterModule.forRoot(routes),
    MdInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
