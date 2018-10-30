import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoChamadoPage } from '../novo-chamado/novo-chamado'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  novochamado = NovoChamadoPage;

}
