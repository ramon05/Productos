import { Component, OnInit } from '@angular/core';
import { RecargasService } from 'src/app/services/recargas.service';
import { Proveedore } from '../interfaces/proveedorRecarga.interface';

@Component({
  selector: 'app-proveedor-recarga',
  templateUrl: './proveedor-recarga.component.html',
  styleUrls: ['./proveedor-recarga.component.css']
})
export class ProveedorRecargaComponent implements OnInit {

  constructor(private recargaServices: RecargasService) { }

  ngOnInit(): void {
    this.consultarProveedoresRecarga();
  }

  get ProveedoresRecarga(): Proveedore[]{
    return this.recargaServices.proveedores;
  }

  consultarProveedoresRecarga(){
    this.recargaServices.obtenerProveedores();
  }

}
