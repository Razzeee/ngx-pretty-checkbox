import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DemoRouteName, MainRouteName, ApiRouteName, InstallRouteName } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private route: Router) { }

  goToDemo(page?: DemoRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.Demo, page]);

    } else {
      this.route.navigate([MainRouteName.Demo]);
    }
  }

  goToApi(page?: ApiRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.API, page]);

    } else {
      this.route.navigate([MainRouteName.API]);
    }
  }

  goToInstall(page?: InstallRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.Install, page]);

    } else {
      this.route.navigate([MainRouteName.Install]);
    }
  }

}