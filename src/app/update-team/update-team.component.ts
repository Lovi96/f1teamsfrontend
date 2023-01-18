import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../team';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  id!: number;
  team: Team = new Team();


  constructor(private teamService: TeamService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teamService.getTeamById(this.id).subscribe(data => {
      this.team = data;
    }, error => console.log(error));
  }

  onSubmit() {

    this.teamService.updateTeam(this.id, this.team).subscribe(data => {
        this.goToTeamList();
      }
      , error => console.log(error));
  }


  goToTeamList() {
    this.router.navigate(['/teams']);
  }
}
