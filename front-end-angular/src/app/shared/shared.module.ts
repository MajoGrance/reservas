import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ListWindowComponent } from './components/list-window/list-window.component';
import { WindowComponent } from './components/window/window.component';
import {
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbSpinnerModule,
    NbToastrModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatRippleModule } from '@angular/material/core';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const NEBULAR_MODULES = [
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbSpinnerModule,
    NbButtonModule,
    NbToastrModule,
];

const MATERIAL_MODULES = [
    MatRippleModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
];

const PRIME_MODULES = [
    TableModule,
];

@NgModule({
        declarations: [
        HeaderComponent,
        ListWindowComponent,
        WindowComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...NEBULAR_MODULES,
        ...MATERIAL_MODULES,
        ...PRIME_MODULES
    ],
    exports: [
        HeaderComponent,
        ListWindowComponent,
        WindowComponent,
        FormsModule,
        ReactiveFormsModule,
        ...NEBULAR_MODULES,
        ...MATERIAL_MODULES,
        ...PRIME_MODULES
    ]
})
export class SharedModule { }
