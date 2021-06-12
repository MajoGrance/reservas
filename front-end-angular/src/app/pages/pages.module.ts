import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { NbMenuModule, NbSidebarModule, NbToastrModule, NbToastrService } from '@nebular/theme';
import { PagesRoutingModule } from './pages-routing.routes';
import { RestauranteWindowComponent } from './restaurantes/restaurante-window/restaurante-window.component';
import { RestauranteListComponent } from './restaurantes/restaurante-list/restaurante-list.component';
import { SharedModule } from '../shared/shared.module';
import { MesaListComponent } from './mesas/mesa-list/mesa-list.component';
import { MesaWindowComponent } from './mesas/mesa-window/mesa-window.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteWindowComponent } from './clientes/cliente-window/cliente-window.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ListaReservasComponent } from './lista-reservas/lista-reservas.component';
import { CategoriaProdcutoListComponent } from './categorias-productos/categoria-producto-list/categoria-producto-list.component';
import { CategoriaProductoWindowComponent } from './categorias-productos/categoria-producto-window/categoria-producto-window.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoWindowComponent } from './productos/producto-window/producto-window.component';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteService } from '../services/abm/restaurante.service';
import { MesaService } from '../services/abm/mesa.service';
import { ReservaService } from '../services/abm/reserva.service';
import { ClienteService } from '../services/abm/cliente.service';
import { CategoriaProductoService } from '../services/abm/categoria-producto.service';
import { ProductoService } from '../services/abm/producto.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
    declarations: [
        PagesComponent,
        RestauranteWindowComponent,
        RestauranteListComponent,
        MesaListComponent,
        MesaWindowComponent,
        ClienteListComponent,
        ClienteWindowComponent,
        ReservarComponent,
        ListaReservasComponent,
        CategoriaProdcutoListComponent,
        CategoriaProductoWindowComponent,
        ProductoListComponent,
        ProductoWindowComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        HttpClientModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbToastrModule.forRoot()
    ],
    providers: [
        RestauranteService,
        MesaService,
        ReservaService,
        ClienteService,
        CategoriaProductoService,
        ProductoService,
        NbToastrService,
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ]
})
export class PagesModule { }
