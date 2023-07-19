import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from 'src/app/Helpers/authHeader';
import { ProveedorResponse, Proveedore } from '../paquetico/interfaces/proveedorPaquetico.interface';
import { Paquetes, PlanesPaqueticosResponse } from '../paquetico/interfaces/planesPaqueticos.interface';
import { venderPaqueticoResponse, ventaPaquetico } from '../paquetico/interfaces/ventaPaqueticos.interface';

@Injectable({
  providedIn: 'root'
})
export class PaqueticosService {
  
  public proveedores: Proveedore[] = [];
  public planesPaquetico: Paquetes[] = [];
  public VentaPaquetico: venderPaqueticoResponse[]=[];
  
  constructor(private http: HttpClient) { }

  obtenerProveedores(){
    const headers = authHeader();
    this.http.get<ProveedorResponse>('https://localhost:7207/api/Paquetico/ConsultaProveedores', {headers}) 
        .subscribe( resp => { // json data
              this.proveedores = resp.data.proveedores;
              console.log(this.proveedores);
            },
            error => {
                console.log('Error: ', error);
            }
        );
  }

  obtenerPlanesPaqueticos(){
    const headers = authHeader();
    this.http.get<PlanesPaqueticosResponse>('https://localhost:7207/api/Paquetico/ConsultaPaquetico?Nic=8099834723&Proveedor=orange', {headers}) 
        .subscribe( resp => { // json data
              this.planesPaquetico = resp.data.paquetes;
              console.log(resp.data);
            },
            error => {
                console.log('Error: ', error);
            }
        );
  }
  VenderPaqueticos( datos: ventaPaquetico){
    debugger;
   var url = 'https://localhost:7207/api/Paquetico/Vender';
    const headers = authHeader();
    this.http.post<venderPaqueticoResponse>(url,datos, {headers}) 
        .subscribe( resp => { // json data
              console.log(resp);
            },
            error => {
                console.log('Error: ', error);
            }
        );
  }
}

