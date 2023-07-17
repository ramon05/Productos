import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProveedorResponse, Proveedore } from '../interfaces/proveedorPaquetico.interface';
import { PaqueticosService } from '../../services/paqueticos.service';

@Component({
  selector: 'app-proveedor-paquetico',
  templateUrl: './proveedor-paquetico.component.html',
  styleUrls: ['./proveedor-paquetico.component.css']
})
export class ProveedorPaqueticoComponent implements OnInit {

  //public Proveedores: Proveedore[] = [];
  constructor(private paqueticoService: PaqueticosService) { }
  
  ngOnInit(): void {
    this.ConsultarProveedorPaqueticos();
  }

  get Proveedores() : Proveedore[]{
    console.log(this.paqueticoService.proveedores)
    return this.paqueticoService.proveedores;
  }

  ConsultarProveedorPaqueticos(){
     this.paqueticoService.obtenerProveedores();
  }
}
