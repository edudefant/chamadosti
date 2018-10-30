import { Component } from '@angular/core';

import { Dashboard } from '../about/dashboard';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Dashboard;

  constructor() {

  }
}
