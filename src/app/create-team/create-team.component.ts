import {Component, OnInit} from '@angular/core';
import {Team} from '../team';
import {TeamService} from '../team.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  team: Team = new Team();

  constructor(private teamService: TeamService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveTeam() {

      this.teamService.createTeam(this.team).subscribe((data: any) => {
          console.log(data);
          this.goToTeamList();
        },
        (error: any) => console.log(error));
    }


  goToTeamList() {
    this.router.navigate(['/teams']);
  }

  onSubmit() {
    console.log(this.team);
    this.saveTeam();
  }
}
