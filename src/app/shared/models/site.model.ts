export class SiteModel
{
    nombre: string;
    url: string;

    constructor(newNombre: string, newUrl: string)
    {
        this.nombre = newNombre;
        this.url = newUrl;
    }
}