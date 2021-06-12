import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
    menuItems: NbMenuItem[] = [
        {
            icon: {icon: 'utensils', pack: 'fas'},
            title: 'Restaurantes',
            link: '/sitio/restaurantes',
            pathMatch: 'prefix'
        },
        {
            icon: {icon: 'map-marker-alt', pack: 'fas'},
            title: 'Mesas',
            link: '/sitio/mesas',
            pathMatch: 'prefix'
        },
        {
            icon: {icon: 'user', pack: 'fas'},
            title: 'Clientes',
            link: '/sitio/clientes',
            pathMatch: 'prefix'
        },
        {
            icon: {icon: 'check-double', pack: 'fas'},
            title: 'Reservar mesa',
            link: '/sitio/reservar',
            pathMatch: 'prefix'
        },
        {
            icon: {icon: 'list', pack: 'fas'},
            title: 'Listar reservas',
            link: '/sitio/lista-reservas',
            pathMatch: 'prefix'
        },
        {
            icon: {icon: 'tag', pack: 'fas'},
            title: 'Categoría de Productos',
            link: '/sitio/categorias-productos',
            pathMatch: 'prefix'
        },
        {
            icon: {icon: 'hamburger', pack: 'fas'},
            title: 'Productos',
            link: '/sitio/productos',
            pathMatch: 'prefix'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
