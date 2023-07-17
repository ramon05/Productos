import { Component, Input, OnInit } from '@angular/core';
import { Proveedore } from '../../interfaces/proveedorPaquetico.interface';

@Component({
  selector: 'list-proveedor-recarga',
  templateUrl: './card-list-proveedor-recarga.component.html',
  styleUrls: ['./card-list-proveedor-recarga.component.css']
})
export class CardListProveedorRecargaComponent {

  @Input()
  public proveedores: Proveedore[] = [];
}
