import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { ProductoModel } from '../../../models/producto';
import { ProductoService } from '../../../services/abm/producto.service';
import { CategoriaProductoService } from '../../../services/abm/categoria-producto.service';

@Component({
    selector: 'app-producto-window',
    templateUrl: './producto-window.component.html',
    styleUrls: ['./producto-window.component.scss']
})
export class ProductoWindowComponent implements OnInit {
    title: string;
    formGroup = new ProductoModel(this.productoService).getFormGroup();
    nuevo: boolean;
    categoriaProductos: any[] = [];

    constructor(
        private productoService: ProductoService,
        private route: ActivatedRoute,
        private router: Router,
        private toastrService: NbToastrService,
        private categoriaProductoService: CategoriaProductoService,
    ) {
        // tslint:disable-next-line: deprecation
        this.formGroup.get('categoriaProductoId').valueChanges.subscribe({
            next: () => {
                this.formGroup.get('precio').setValue(1);
            }
        });
    }

    ngOnInit(): void {
        this.getCategoriaProductos();
        // tslint:disable-next-line: deprecation
        this.route.params.subscribe({
            next: (params) => {
                if (params.id !== 'nuevo') {
                    this.title = 'Editar producto';
                    this.nuevo = false;
                    this.getFormGroup(params.id);
                } else {
                    this.title = 'Nuevo producto';
                    this.nuevo = true;
                    this.formGroup.get('capacidad').setValue(2);
                }
            }
        });
    }

    getPrecios(id: number): number[] {
        const categoriaProducto = this.getCategoriaProducto(id);
        if (!categoriaProducto) {
            return [1];
        }
        const precios = [1];
        for (let i = 2; i <= categoriaProducto.precios; i++) {
            precios.push(i);
        }
        return precios;
    }

    getCategoriaProducto(id: number): any {
        return this.categoriaProductos?.find(categoriaProducto => categoriaProducto.id === id);
    }

    async getCategoriaProductos(): Promise<void> {
        try {
            const resp = await this.categoriaProductoService.get();
            console.log(resp);
            if (resp.ok) {
                resp.resp.sort((a, b) => {
                    let str1 = a?.toString()?.toUpperCase().replace(' ', '');
                    let str2 = b?.toString()?.toUpperCase().replace(' ', '');
                    if (!str1) {
                        str1 = '';
                    }
                    if (!str2) {
                        str2 = '';
                    }
                    return str1.localeCompare(str2) * -1;
                });
                this.categoriaProductos = resp.resp;
                if (this.nuevo && resp.resp.length) {
                    this.formGroup.get('categoriaProductoId').setValue(resp.resp[0].id);
                }
            } else {
                this.toastrService.show(`${resp.resp}`,
                    `${resp.msg}`, { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
            }
        } catch (error) {
            this.toastrService.show(`${error}`, 'Error',
                { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
        }
    }

    async getFormGroup(id: number): Promise<void> {
        try {
            const resp = await this.productoService.get(id);
            console.log(resp);
            if (resp.ok) {
                const model = new ProductoModel(this.productoService);
                model.deserialize(resp.resp);
                this.formGroup = model.getFormGroup();
                // tslint:disable-next-line: deprecation
                this.formGroup.get('categoriaProductoId').valueChanges.subscribe({
                    next: () => {
                        this.formGroup.get('precio').setValue(1);
                    }
                });
            } else {
                this.toastrService.show(`${resp.resp}`,
                    `${resp.msg}`, { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
            }
        } catch (error) {
            this.toastrService.show(`${error}`, 'Error',
                { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
        }
    }

    async onSave(): Promise<void> {
        Object.keys(this.formGroup.controls).forEach(key => {
            this.formGroup.get(key)?.markAsTouched();
        });
        try {
            if (this.formGroup.valid) {
                const model = new ProductoModel(this.productoService).deserialize(this.formGroup.getRawValue());
                const resp = await model.save();
                console.log(resp);
                if (resp.ok) {
                    this.router.navigate(['/sitio/productos']);
                    this.toastrService.show(
                        `id: ${resp.resp.id}`,
                        `${resp.msg}`,
                        { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'success'}
                    );
                } else {
                    this.toastrService.show(`${resp.resp}`,
                        `${resp.msg}`, { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
                }
            }
        } catch (error) {
            this.toastrService.show(`${error}`, 'Error', { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
        }
    }

    async onDelete(): Promise<void> {
        try {
            const resp = await this.productoService.delete(this.formGroup.get('id').value);
            if (resp.ok) {
                this.router.navigate(['/sitio/productos']);
                this.toastrService.show(
                    `id: ${resp.resp.id}`,
                    `${resp.msg}`,
                    { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'success'}
                );
            } else {
                this.toastrService.show(`${resp.resp}`,
                    `${resp.msg}`, { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
            }
        } catch (error) {
            this.toastrService.show(`${error}`, 'Error', { position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'danger' });
        }
    }
}
