import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateTeamComponent} from "./update-team/update-team.component";
import {CreateTeamComponent} from "./create-team/create-team.component";
import {LoginComponent} from "./login/login.component";
import {HttpInterceptorService} from "./http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    CreateTeamComponent,
    UpdateTeamComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
