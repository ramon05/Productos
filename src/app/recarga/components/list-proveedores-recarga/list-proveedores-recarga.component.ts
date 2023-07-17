import { Component, Input, OnInit } from '@angular/core';
import { Proveedore } from '../../interfaces/proveedorRecarga.interface';

@Component({
  selector: 'list-proveedores-recarga',
  templateUrl: './list-proveedores-recarga.component.html',
  styles: [
  ]
})
export class ListProveedoresRecargaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public ProveedoresRecarga: Proveedore[] = [];
}
