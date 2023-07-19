import { Component, OnInit,Input } from '@angular/core';
import { PaqueticosService } from 'src/app/services/paqueticos.service';
import { Paquetes } from '../interfaces/planesPaqueticos.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { venderPaqueticoResponse, ventaPaquetico } from '../interfaces/ventaPaqueticos.interface';
import { Proveedore } from '../interfaces/proveedorPaquetico.interface';

@Component({
  selector: 'app-vender-paquetico',
  templateUrl: './vender-paquetico.component.html',
  styleUrls: ['./vender-paquetico.component.css']
})

export class VenderPaqueticoComponent implements OnInit {
  


  constructor(private PaqueticoService: PaqueticosService, private formBuilder: FormBuilder) { }
  myForm: FormGroup = this.formBuilder.group({
    terminalID: ['', Validators.required],
    solicituID: ['', Validators.required],
    //monto: ['', Validators.required],
    nic: ['', Validators.required],
    proveedorId: ['', Validators.required],
    plan_Id: [''],
    proveedor:['']
  });

 

  submitted = false;
  VentaPaqueticos: ventaPaquetico[]=[];
 

  
  ngOnInit(): void {
    this.consultarPlanesPaqueticos();
    this.consultarProveedoresPaqueticos();

  }
 
  
  get planesPaquetico(): Paquetes[]{
    return this.PaqueticoService.planesPaquetico;
  };
  get proveedores(): Proveedore[]{
    return this.PaqueticoService.proveedores;
  };



  consultarPlanesPaqueticos(){
    this.PaqueticoService.obtenerPlanesPaqueticos();
  }
  consultarProveedoresPaqueticos(){
    this.PaqueticoService.obtenerProveedores();
  }
 
 

  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    
    this.PaqueticoService.VenderPaqueticos(this.myForm.value);
    this.myForm.reset();
    this.submitted = false;
  }

}
