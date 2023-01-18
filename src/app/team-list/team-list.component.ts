import { Component, OnInit } from '@angular/core';
import { Team } from '../team'
import { TeamService } from '../team.service'
import { Router } from '@angular/router';
import {AppComponent} from "../app.component";
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamService: TeamService,public appComponent: AppComponent,
              private router: Router) { }

  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams(){
    this.teamService.getTeamsList().subscribe(data => {
      this.teams = data;
    });
  }

  updateTeam(id: number){
    this.router.navigate(['update-team', id]);
  }

  deleteTeam(id: number){
    this.teamService.deleteTeam(id).subscribe( data => {
      this.getTeams();
    })
  }
}
