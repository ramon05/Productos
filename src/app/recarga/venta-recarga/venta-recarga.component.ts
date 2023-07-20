import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecargasService } from 'src/app/services/recargas.service';
import { Proveedore } from '../interfaces/proveedorRecarga.interface';
import { Data, VentaRecarga } from '../interfaces/ventaRecarga';

@Component({
  selector: 'app-venta-recarga',
  templateUrl: './venta-recarga.component.html',
  styleUrls: ['./venta-recarga.component.css']
})
export class VentaRecargaComponent implements OnInit {

  public venta!: Data;
  constructor(
    private fb: FormBuilder,
    private recargaService: RecargasService
    ) { }
  
  public ventaForm: FormGroup = this.fb.group({
    terminalID: [],
    solicituID: [],
    monto: [],
    proveedor: [''],
    nic: [''],
    proveedorID: []
  });

  ngOnInit(): void {
    this.consultarProveedorRecarga();
  }

  consultarProveedorRecarga(){
     this.recargaService.obtenerProveedores();
  }

  get Proveedores(): Proveedore[]{
    return this.recargaService.proveedores;
  }

  get currentVentaRecarga(): VentaRecarga{
    const ventaRecarga = this.ventaForm.value as VentaRecarga;
    return ventaRecarga;
  }

  onSave(): void{

    this.recargaService.ventaRecarga(this.currentVentaRecarga)
        .subscribe(result => {
          this.venta = result.data;
        });
  }

}
