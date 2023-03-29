import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private UiService: UiService, private router: Router) {
    this.subscription = this.UiService.onToogle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  toogleAddTask() {
    this.UiService.toogleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
