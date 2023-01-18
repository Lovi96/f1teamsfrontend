import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'teams', component: TeamListComponent},
  {path: 'create-team', component: CreateTeamComponent},
  {path: '', redirectTo: 'teams', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: TeamListComponent},
  {path: 'update-team/:id', component: UpdateTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
