// Components
import { Component, Input, HostBinding } from '@angular/core';

@Component(
    {
        selector: 'view-sites-component',
        templateUrl: 'view-sites.component.html'
    }
)
export class ViewSitesComponent
{
    @Input() nameDestino: string;
    @Input() urlImagen: string;
    @HostBinding('attr.class') cssClass = 'col-md-4';
    
    constructor()
    {
        this.urlImagen = "https://placeimg.com/380/230/nature";
    }
}