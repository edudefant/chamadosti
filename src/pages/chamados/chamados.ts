import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoChamadoPage } from '../novo-chamado/novo-chamado'

@Component({
  selector: 'page-chamados',
  templateUrl: 'chamados.html'
})
export class ChamadosPage {

  novochamado = NovoChamadoPage;

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Chamado 1',
      'Chamado 2',
      'Chamado 3',
      'Chamado 4'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
