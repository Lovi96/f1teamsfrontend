import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseURL = "http://localhost:8080/api/teams";

  constructor(private httpClient: HttpClient) { }

  getTeamsList(): Observable<Team[]>{
    return this.httpClient.get<Team[]>(`${this.baseURL}`);
  }

  createTeam(team: Team): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, team);
  }

  getTeamById(id: number): Observable<Team>{
    return this.httpClient.get<Team>(`${this.baseURL}/${id}`);
  }

  updateTeam(id: number, team: Team): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, team);
  }

  deleteTeam(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
