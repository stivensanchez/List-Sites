// Components
import { Component, OnInit } from '@angular/core';

// Models
import { SiteModel } from './../../../shared/models/site.model';

@Component({
  selector: 'app-list-sites',
  templateUrl: './list-sites.component.html',
  styleUrls: ['./list-sites.component.css']
})
export class ListSitesComponent implements OnInit {

  listDestinos: Array<SiteModel> = new Array<SiteModel>();

  constructor() { }

  ngOnInit() {
  }

  // Ejemplo de variables HTMLInputElement
  submit(nombre: string, url: string): boolean
  {
    let newSites = new SiteModel(nombre, url);

    this.listDestinos.push(newSites);

    console.log(this.listDestinos);

    return false;
  }

}
