import {Component, OnInit} from '@angular/core';
import '@reactivex/rxjs/compat/add/operator/finally';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'f1TeamsFrontend';
  public isLoggedIn = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isLoggedIn = this.authenticationService.isUserLoggedIn();
      }
    })
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}
