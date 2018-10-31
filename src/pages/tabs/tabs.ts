import { Component } from '@angular/core';

import { ChamadosPage } from '../chamados/chamados';
import { WikiPage } from '../wiki/wiki';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WikiPage;
  tab2Root = ChamadosPage;

  constructor() {

  }
}
